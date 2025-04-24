interface FilterProps {
  title: string;
  rating: string;
  genre: string;
  onFilterChange: (field: string, value: string) => void;
}

export function Filter({ title, rating, genre, onFilterChange }: FilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search titles..."
        value={title}
        onChange={(e) => onFilterChange('title', e.target.value)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400 min-w-[200px]"
      />
      <select
        value={rating}
        onChange={(e) => onFilterChange('rating', e.target.value)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      >
        <option value="">All Ratings</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <option key={num} value={num}>
            {num}+ Stars
          </option>
        ))}
      </select>
      <select
        value={genre}
        onChange={(e) => onFilterChange('genre', e.target.value)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      >
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Faantasy</option>
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
  );
}