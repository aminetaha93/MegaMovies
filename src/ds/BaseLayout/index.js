import { node } from "prop-types";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { HomeOutlined, SearchOutlined, ListOutlined } from "@material-ui/icons";

import { HomePath, MyListPath, SearchPath } from "../../routes";
import MenuItem from "../MenuItem";
import Separator from "../Separator";

export default function BaseLayout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movies</Typography>
          <MenuItem startIcon={<HomeOutlined />} to={HomePath}>
            Accueil
          </MenuItem>
          <MenuItem startIcon={<SearchOutlined />} to={SearchPath}>
            Recherche
          </MenuItem>
          <MenuItem startIcon={<ListOutlined />} to={MyListPath}>
            Ma liste
          </MenuItem>
          <Separator />
          <MenuItem>Login</MenuItem>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

BaseLayout.prototypes = {
  children: node,
};
