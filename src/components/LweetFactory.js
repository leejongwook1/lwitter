import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid"; //랜덤 이름 생성
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const LweetFactory = ({ userObj }) => {
  const [lweet, setLweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const onSubmit = async (event) => {
    if (lweet === "") {
      return;
    }

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
    setAttachment("");
  };

  return (
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          value={lweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      <label htmlFor="attach-file" className="factoryInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      />
      {attachment && (
        <div className="factoryForm__attachment">
          <img
            src={attachment}
            style={{
              backgroundImage: attachment,
            }}
            alt=""
            id="img"
          />
          <div className="factoryForm__clear" onClick={onClearAttachment}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};

export default LweetFactory;
