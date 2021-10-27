import { CircularProgress, Grid } from "@material-ui/core";
import MovieCard from "../../ds/MovieCard";
import React from "react";
import { useQuery } from "react-query";
import { Alert } from "@material-ui/lab";

import { fetchMovies } from "../../dataProvider";

//const defaultMovies = new Array(20).fill(null).map(() => ({
//  id: uuid(),
//  title: 'titanic',
//  image: 'https://api.lorem.space/image/movie?w=310&h=220',
//}));

export default function MoviesList() {
  const { data: movies, error, isLoading } = useQuery("movies", fetchMovies);

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Grid container spacing={2}>
      {movies.map(({ Title, imdbID, Poster }) => (
        <Grid item key={imdbID}>
          <MovieCard title={Title} id={imdbID} image={Poster} />
        </Grid>
      ))}
    </Grid>
  );
}
