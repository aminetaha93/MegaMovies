import { HomeOutlined } from "@material-ui/icons";

import MenuItem from ".";
import { AppBar, Toolbar } from "@material-ui/core";

export default {
  component: MenuItem,
  title: "MenuItem",
  decorators: [
    (Story) => (
      <AppBar position="static">
        <Toolbar>
          <Story />
        </Toolbar>
      </AppBar>
    ),
  ],
};

export const Default = () => <MenuItem to="/">MENU 1</MenuItem>;

export const WithIcon = () => (
  <MenuItem startIcon={<HomeOutlined />} to="/">
    MENU 1
  </MenuItem>
);

export const WithVariants = () => (
  <MenuItem startIcon={<HomeOutlined />} to="/" variant="current">
    MENU 1
  </MenuItem>
);
