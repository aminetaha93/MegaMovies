import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { string } from "prop-types";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";

export default function MovieCard({ title, image, id }) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.root }}>
      <CardActionArea component={Link} to={`/movies/${id}`}>
        <CardMedia component="img" height="210" image={image} title="title" />
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MovieCard.prototype = {
  title: string.isRequired,
  id: string.isRequired,
  image: string,
};
