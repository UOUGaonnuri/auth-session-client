import { RecoilRoot } from "recoil";
import AppRouter from "@/Page/Router";
import GlobalStyles from "@/Styles/GlobalStyles";

function App() {
  return (
    <>
      <RecoilRoot>
        <AppRouter />
        <GlobalStyles />
      </RecoilRoot>
    </>
  );
}

export default App;
