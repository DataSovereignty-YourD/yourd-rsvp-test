import { Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "./recoil/loginState";
import useSessionStorage from "./hooks/sesstionStorage";
import MainPage from "./pages/mainPage";
import CreateName from "./components/create/createName";
import TopBar from "./components/common/topBar";
import ProjectTopBar from "./components/common/projectTopBar";
import CreateDetail from "./components/create/createDetail";
import CreateRsvp from "./components/create/createRsvp";
import ListRsvp from "./pages/listRsvp";
import ProjectDetailPage from "./pages/projectDetailPage";
import Publish from "./pages/publish";
import DashBoard from "./pages/dashBoard";
import SideBar from "./pages/sideBar";
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

  // if (!isLoggedIn) {
  //   return (
  //     <React.Fragment>
  //       <TopBar />
  //       <Routes>
  //         <Route path="/" element={<MainPage />} />
  //         <Route path="/createname" element={<CreateName />} />
  //         <Route path="/createdetail" element={<CreateDetail />} />
  //         <Route path="/creatersvp" element={<CreateRsvp />} />        
  //         <Route path="/project" element={<ProjectDetailPage />} />
  //       </Routes>
  //     </React.Fragment>
  //   );
  // }

  return (
    <div>
      <React.Fragment>
        <ProjectTopBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createname" element={<CreateName />} />
          <Route path="/createdetail" element={<CreateDetail />} />
          <Route path="/creatersvp" element={<CreateRsvp />} />
          <Route path="/project" element={<ListRsvp />} />
          <Route path="/project/:id/*" element={<ProjectDetailPage />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
