import { Global, ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import global from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global}></Global>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
