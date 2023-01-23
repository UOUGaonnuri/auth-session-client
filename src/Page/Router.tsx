import { RootWrapper } from "@/Component/LayoutStyles/styles";
import { USER_NAME_SESSION_ATTRIBUTE_NAME } from "@/Service/Auth/AuthService";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import AuthPage from "./AuthPage";
import MainPage from "./MainPage";

let isLoggedIn = false;

const AppRouter = () => {
  const userInfo = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  return (
    <Router>
      {userInfo ? (
        <>
          <RootWrapper>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
            <Footer />
          </RootWrapper>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<AuthPage />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default AppRouter;
