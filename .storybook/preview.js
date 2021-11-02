import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "../src/ds/theme";
import { worker } from "../src/mocks/browser";

worker.start();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),

  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
