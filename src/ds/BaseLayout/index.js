import { node } from "prop-types";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { HomeOutlined, SearchOutlined, ListOutlined } from "@material-ui/icons";

import { HomePath, MyListPath, SearchPath } from "../../routes";
import MenuItem, { useVariantLocation } from "../MenuItem";
import Separator from "../Separator";

export default function BaseLayout({ children }) {
  const { variantPath } = useVariantLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movies</Typography>
          <MenuItem
            startIcon={<HomeOutlined />}
            to={HomePath}
            variant={variantPath(HomePath)}
          >
            Accueil
          </MenuItem>
          <MenuItem
            startIcon={<SearchOutlined />}
            to={SearchPath}
            variant={variantPath(SearchPath)}
          >
            Recherche
          </MenuItem>
          <MenuItem
            startIcon={<ListOutlined />}
            to={MyListPath}
            variant={variantPath(MyListPath)}
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
