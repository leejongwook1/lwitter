import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null); //유저를 가장 위의 파일에 있어야 나중에 활용하기 편함.

  useEffect(() => {
    //상태 변경시 user를 체크하여 로그인 상태유무를 판별
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user); //로그인 되있는 유저를 저장
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} lwitter</footer>
    </>
  );
}

export default App;
