import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
}

const MovieCard: FC<MovieCardProps> = ({ id, title, poster }) => {
  return (
    <Link href={`/movies/${id}`} className="block border p-4 rounded-lg shadow">
      <Image src={poster} alt={title} width={200} height={300} />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
    </Link>
  );
};

export default MovieCard;
