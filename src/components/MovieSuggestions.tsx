import React from 'react';
import { Star } from 'lucide-react';

interface Movie {
  title: string;
  year: number;
  genre: string;
  rating: number;
  imageUrl: string;
  plot?: string;
}

interface MovieSuggestionsProps {
  suggestions: Movie[];
  isLoading: boolean;
}

export default function MovieSuggestions({ suggestions, isLoading }: MovieSuggestionsProps) {
  if (isLoading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-4">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-16 h-24 bg-purple-500/20 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-purple-500/20 rounded w-3/4"></div>
                <div className="h-3 bg-purple-500/20 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-4 space-y-4 z-50">
      {suggestions.map((movie, index) => (
        <div key={index} className="flex items-center space-x-4 hover:bg-white/5 p-2 rounded-lg transition cursor-pointer">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-16 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="text-white font-semibold">{movie.title}</h3>
            <p className="text-gray-400 text-sm">{movie.year} • {movie.genre}</p>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-gray-400 text-sm ml-1">{movie.rating.toFixed(1)}</span>
            </div>
            {movie.plot && (
              <p className="text-gray-400 text-sm mt-2 line-clamp-2">{movie.plot}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}