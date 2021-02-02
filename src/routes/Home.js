import Lweet from "components/Lweet";
import LweetFactory from "components/LweetFactory";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
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

  return (
    <div className="container">
      <LweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
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
