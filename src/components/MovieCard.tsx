import { Movie } from '../types/movie';
import { PencilIcon, TrashIcon, PlayIcon } from '@heroicons/react/24/outline';

interface MovieCardProps {
  movie: Movie;
  onEdit: (movie: Movie) => void;
  onDelete: (id: string) => void;
}

export function MovieCard({ movie, onEdit, onDelete }: MovieCardProps) {
  return (
    <div className="movie-card relative group">
      <img 
        src={movie.posterURL} 
        alt={movie.title} 
        className="w-full h-[400px] object-cover rounded-md"
      />
      <div className="movie-overlay absolute inset-0 flex flex-col justify-end p-4 rounded-md">
        <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-600 font-bold">{movie.rating}/5 ★</span>
          <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm">
            {movie.genre}
          </span>
        </div>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">{movie.description}</p>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
            <PlayIcon className="h-5 w-5" />
            Play
          </button>
          <button
            onClick={() => onEdit(movie)}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(movie.id)}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}