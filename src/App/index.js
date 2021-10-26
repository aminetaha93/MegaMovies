import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import HomePage from "../home/HomePage";
import SearchPage from "../search/SearchPage";
import MyListPage from "../my-list/MyListPage";
import theme from "../ds/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/my-list">
              <MyListPage />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
