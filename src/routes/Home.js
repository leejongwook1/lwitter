import Lweet from "components/Lweet";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [lweet, setLweet] = useState("");
  const [lweets, setLweets] = useState([]);

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
    await dbService.collection("lweets").add({
      text: lweet,
      createdAt: Date.now(), //DB에서 시간 순서대로 생성되게 함
      creatorId: userObj.uid, //유저 id 보냄
    });
    setLweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setLweet(value);
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
        <input type="file" accept="image/*" />
        <input type="submit" value="Lweet" />
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
