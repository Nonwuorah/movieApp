import { useState, useEffect } from 'react';
import { Movie } from './types/movie';
import { MovieList } from './components/MovieList';
import { Filter } from './components/Filter';
import { MovieForm } from './components/MovieForm';

const initialMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    description: 'A thief who enters the dreams of others to steal secrets from their subconscious.',
    posterURL: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    rating: 5,
    genre: 'Sci-Fi'
  },
  {
    id: '2',
    title: 'The Dark Knight (2008)',
    description: 'Batman faces his greatest challenge as the Joker wreaks havoc on Gotham City.',
    posterURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug&psig=AOvVaw0mKzGoA5B7AoHWyeGy7nj_&ust=1745595918655000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLDgktmB8YwDFQAAAAAdAAAAABAE',
    rating: 5,
    genre: 'Action'
  }
];

function App() {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : initialMovies;
  });
  const [filters, setFilters] = useState({ title: '', rating: '', genre: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | undefined>();

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(filters.title.toLowerCase());
    const matchesRating = !filters.rating || movie.rating >= Number(filters.rating);
    const matchesGenre = !filters.genre || movie.genre === filters.genre;
    return matchesTitle && matchesRating && matchesGenre;
  });

  const handleAddMovie = (movieData: Omit<Movie, 'id'>) => {
    const newMovie = {
      ...movieData,
      id: Date.now().toString()
    };
    setMovies((prev) => [...prev, newMovie]);
  };

  const handleEditMovie = (movieData: Omit<Movie, 'id'>) => {
    if (!editingMovie) return;
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === editingMovie.id ? { ...movie, ...movieData } : movie
      )
    );
    setEditingMovie(undefined);
  };

  const handleDeleteMovie = (id: string) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <header className="bg-gradient-to-b from-black to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-red-600">MOVIEFLIX</h1>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Add Movie
            </button>
          </div>
          <div className="mt-8">
            <Filter
              title={filters.title}
              rating={filters.rating}
              genre={filters.genre}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MovieList
          movies={filteredMovies}
          onEditMovie={(movie) => {
            setEditingMovie(movie);
            setIsFormOpen(true);
          }}
          onDeleteMovie={handleDeleteMovie}
        />
      </main>

      {isFormOpen && (
        <MovieForm
          movie={editingMovie}
          onSubmit={editingMovie ? handleEditMovie : handleAddMovie}
          onClose={() => {
            setIsFormOpen(false);
            setEditingMovie(undefined);
          }}
        />
      )}
    </div>
  );
}

export default App;