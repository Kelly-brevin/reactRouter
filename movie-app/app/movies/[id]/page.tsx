import { notFound } from "next/navigation";
import { movies } from "../../../data/movies";
import Link from "next/link";

export default function MovieDetails({ params }: { params: { id: string } }) {
  const movie = movies.find((m) => m.id === params.id);
  if (!movie) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-2">{movie.description}</p>
      <div className="mt-4">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link href="/" className="text-blue-500 mt-4 block">
        Back to Home
      </Link>
    </div>
  );
}
