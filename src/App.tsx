import { Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "./recoil/loginState";
import useSessionStorage from "./hooks/sesstionStorage";
import MainPage from "./pages/mainPage";
import TopBar from "./components/common/topBar";
import ListRsvp from "./pages/listRsvp";
import EventForm from "./pages/eventForm";
import EventDetailPage from "./pages/eventDetail/eventDetailPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isLoggedinSession, setIsLoggedInSession] = useSessionStorage(
    "isLoggedin",
    false
  );

  useEffect(() => {
    setIsLoggedIn(isLoggedinSession);
  }, []);

  useEffect(() => {
    setIsLoggedInSession(isLoggedIn);
  }, []);


  return (
    <div>
      <React.Fragment>
        <TopBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/eventform" element={<EventForm />} />
          <Route path="/project" element={<ListRsvp />} />
          <Route path="/project/:id/*" element={<EventDetailPage />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
