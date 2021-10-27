import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { QueryClientProvider, QueryClient } from "react-query";

import { HomePath, MyListPath, SearchPath } from "../routes";
import HomePage from "../home/HomePage";
import SearchPage from "../search/SearchPage";
import MyListPage from "../my-list/MyListPage";
import theme from "../ds/theme";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
              <Route exact path={HomePath}>
                <HomePage />
              </Route>
              <Route path={SearchPath}>
                <SearchPage />
              </Route>
              <Route path={MyListPath}>
                <MyListPage />
              </Route>
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
