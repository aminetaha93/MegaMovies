import MovieCard from ".";

export default {
  component: MovieCard,
  title: "MovieCard",
};

export const Default = () => <MovieCard title="titanic" />;

export const WithImage = () => (
  <MovieCard
    title="titanic"
    image="https://api.lorem.space/image/movie?w=310&h=220"
  />
);

export const WithOnRoute = () => (
  <MovieCard
    id={12}
    title="titanic"
    image="https://api.lorem.space/image/movie?w=310&h=220"
  />
);
