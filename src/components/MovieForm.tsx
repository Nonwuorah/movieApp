import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';

interface MovieFormProps {
  movie?: Movie;
  onSubmit: (movie: Omit<Movie, 'id'>) => void;
  onClose: () => void;
}

export function MovieForm({ movie, onSubmit, onClose }: MovieFormProps) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '5',
    genre: 'Action'
  });

  useEffect(() => {
    if (movie) {
      setForm({
        title: movie.title,
        description: movie.description,
        posterURL: movie.posterURL,
        rating: movie.rating.toString(),
        genre: movie.genre
      });
    }
  }, [movie]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: form.title,
      description: form.description,
      posterURL: form.posterURL,
      rating: Number(form.rating),
      genre: form.genre
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg w-full max-w-md p-6 border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-white">
          {movie ? 'Edit Movie' : 'Add New Movie'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              rows={4}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Poster URL</label>
            <input
              type="url"
              value={form.posterURL}
              onChange={(e) => setForm({ ...form, posterURL: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Rating</label>
            <select
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Genre</label>
            <select
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
              <option value="Mystery">Mystery</option>
              <option value="Documentary">Documentary</option>
              <option value="Musical">Musical</option>
              <option value="Western">Western</option>
              <option value="History">History</option>
              <option value="Violent">Violent</option>
              <option value="18+">18+</option>
              <option value="Faith">Faih</option>
              <option value="Animie">Animie</option>
              <option value="Reality">Reality</option>
              <option value="Sports">Sports</option>
              <option value="Stand-Up">Stand-Up</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              {movie ? 'Update' : 'Add'} Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}