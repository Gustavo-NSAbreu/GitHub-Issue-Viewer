import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import RepositoryContextProvider from "./context/RepositoryContext";

export default function App() {
  return (
    <RepositoryContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </RepositoryContextProvider>
  )
}
