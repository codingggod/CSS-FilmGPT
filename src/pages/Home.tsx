import React, { useState } from 'react';
import { Search, Star, Sparkles, Film, Brain } from 'lucide-react';
import MovieSuggestions from '../components/MovieSuggestions';
import useMovieSuggestions from '../hooks/useMovieSuggestions';
import { movieDatabase } from '../hooks/useMovieSuggestions';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { suggestions, isLoading } = useMovieSuggestions(searchQuery);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Discover Your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}Favorite Movie
            </span>
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            Tell us what you're in the mood for, and we'll find the perfect match
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try: 'A thought-provoking sci-fi movie' or 'Something romantic with music'"
              className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
            />
            <Search className="absolute right-4 top-4 text-gray-400" />
            <MovieSuggestions suggestions={suggestions} isLoading={isLoading} />
          </div>
        </div>
      </div>

      {/* Example Queries Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Try These Queries</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Mind-bending thriller",
              "Action-packed adventure",
              "Deep and philosophical",
              "Romantic musical",
              "Sci-fi with great visuals"
            ].map((query, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(query)}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition"
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition">
            <div className="flex items-center mb-4">
              <Brain className="text-yellow-500 mr-2" />
              <h3 className="text-xl font-semibold text-white">Smart Search</h3>
            </div>
            <p className="text-gray-400">Understands natural language and finds movies that match your mood</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition">
            <div className="flex items-center mb-4">
              <Sparkles className="text-purple-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">AI Powered</h3>
            </div>
            <p className="text-gray-400">Advanced algorithms analyze movie themes and content</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition">
            <div className="flex items-center mb-4">
              <Film className="text-pink-500 mr-2" />
              <h3 className="text-xl font-semibold text-white">Personalized</h3>
            </div>
            <p className="text-gray-400">Get recommendations based on your unique preferences</p>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movieDatabase.slice(0, 4).map((movie, index) => (
            <div key={index} className="relative group">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="rounded-lg w-full h-[400px] object-cover transition transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">{movie.title}</h3>
                  <p className="text-gray-300 text-sm">{movie.year} • {movie.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}