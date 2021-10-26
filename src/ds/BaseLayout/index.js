import { node } from "prop-types";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { HomeOutlined, SearchOutlined, ListOutlined } from "@material-ui/icons";

import { HomePath, MyListPath, SearchPath } from "../../routes";
import MenuItem from "../MenuItem";
import Separator from "../Separator";
import { useLocation } from "react-router-dom";

export default function BaseLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movies</Typography>
          <MenuItem
            startIcon={<HomeOutlined />}
            to={HomePath}
            variant={pathname === HomePath ? "current" : "default"}
          >
            Accueil
          </MenuItem>
          <MenuItem
            startIcon={<SearchOutlined />}
            to={SearchPath}
            variant={pathname === SearchPath ? "current" : "default"}
          >
            Recherche
          </MenuItem>
          <MenuItem
            startIcon={<ListOutlined />}
            to={MyListPath}
            variant={pathname === MyListPath ? "current" : "default"}
          >
            Ma liste
          </MenuItem>
          <Separator />
          <MenuItem to="/login">Login</MenuItem>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

BaseLayout.prototypes = {
  children: node,
};
