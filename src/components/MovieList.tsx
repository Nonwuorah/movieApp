import { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  onEditMovie: (movie: Movie) => void;
  onDeleteMovie: (id: string) => void;
}

export function MovieList({ movies, onEditMovie, onDeleteMovie }: MovieListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onEdit={onEditMovie}
          onDelete={onDeleteMovie}
        />
      ))}
    </div>
  );
}