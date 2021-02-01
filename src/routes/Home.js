import Lweet from "components/Lweet";
import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //랜덤 이름 생성

const Home = ({ userObj }) => {
  const [lweet, setLweet] = useState("");
  const [lweets, setLweets] = useState([]);
  const [attachment, setAttachment] = useState();

  // const getLweets = async () => {    onSnapshot과 비슷하지만 실시간은 되지않음
  //   const dbLweets = await dbService.collection("lweets").get();
  //   dbLweets.forEach((document) => {
  //     const lweetObject = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     setLweets((prev) => [lweetObject, ...prev]);
  //   });
  // };

  useEffect(() => {
    //데이터베이스에서 무슨일이 있을때마다 알림을 받음
    dbService.collection("lweets").onSnapshot((snapshot) => {
      const lweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLweets(lweetArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    let attachmentUrl = "";

    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const lweetObj = {
      text: lweet,
      createdAt: Date.now(), //DB에서 시간 순서대로 생성되게 함
      creatorId: userObj.uid, //유저 id 보냄
      attachmentUrl,
    };

    await dbService.collection("lweets").add(lweetObj);
    setLweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setLweet(value);
  };

  //이미지 파일 미리보기
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;

    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttachment(null);
    document.querySelector("#img").value = null;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={lweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} id="img" />
        <input type="submit" value="Lweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" alt="" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
      <div>
        {lweets.map((lweet) => (
          <Lweet
            key={lweet.id}
            lweetObj={lweet}
            isOwner={lweet.creatorId === userObj.uid} //true or false check
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
