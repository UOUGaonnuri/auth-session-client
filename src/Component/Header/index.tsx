import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { logout } from "@/Service/Auth/AuthService";
import { userState } from "@/Store/Data/User/User";
import { UserDetail } from "@/Store/Type/User/User";
import { useSetRecoilState } from "recoil";

const Header = () => {
  const setUserInfo = useSetRecoilState<UserDetail>(userState);

  const onClickLogout = () => {
    logout()
      .then(() => {
        alert("로그아웃 되었습니다.");
        setUserInfo({
          userId: 0,
          userName: "",
          userEmail: "",
          role: "",
        });
        window.location.reload();
      })
      .catch((ex) => {
        alert("로그아웃 과정에서 에러가 발생하였습니다.");
        console.log(ex);
      });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gaonnuri Todo
        </Typography>
        <Button color="inherit" onClick={onClickLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
