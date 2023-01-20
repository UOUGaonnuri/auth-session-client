import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import AuthPage from "./AuthPage";
import MainPage from "./MainPage";

let isLoggedIn = false;

const AppRouter = () => {
  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
          <Footer />
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
