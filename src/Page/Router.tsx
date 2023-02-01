import { RootWrapper } from "@/Component/LayoutStyles/styles";
import { userState } from "@/Store/Data/User/User";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import AuthPage from "./AuthPage";
import MainPage from "./MainPage";
import SignupPage from "./SignupPage";

const AppRouter = () => {
  const userInfo = useRecoilValue(userState);
  return (
    <Router>
      {userInfo.userId !== 0 ? (
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
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default AppRouter;
