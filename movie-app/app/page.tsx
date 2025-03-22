import MovieCard from "./components/MovieCard";
import { movies } from "../data/movies";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Movie App</h1>
      <div className="grid grid-cols-2 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
          />
        ))}
      </div>
    </main>
  );
}
