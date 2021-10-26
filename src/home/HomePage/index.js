import BaseLayout from "../../ds/BaseLayout";
import MovieCard from "../../ds/MovieCard";

export default function HomePage() {
  return (
    <BaseLayout>
      <MovieCard
        id={12}
        title="titanic"
        image="https://api.lorem.space/image/movie?w=310&h=220"
      />
    </BaseLayout>
  );
}
