import MovieCard from ".";

export default {
  component: MovieCard,
  title: "MovieCard",
};

export const Default = () => <MovieCard title="titanic" id="12" />;

export const WithImage = () => (
  <MovieCard
    id="12"
    title="titanic"
    image="https://api.lorem.space/image/movie?w=310&h=220"
  />
);

export const WithOnRoute = () => (
  <MovieCard
    id="12"
    title="titanic"
    image="https://api.lorem.space/image/movie?w=310&h=220"
  />
);
