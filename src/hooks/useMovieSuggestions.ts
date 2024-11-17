import { useState, useEffect } from 'react';

interface Movie {
  title: string;
  year: number;
  genre: string;
  rating: number;
  imageUrl: string;
  plot?: string;
  keywords?: string[];
}

// Enhanced movie database with plots and keywords
export const movieDatabase: Movie[] = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.3,
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=750&fit=crop",
    plot: "A thief who enters the dreams of others to steal secrets from their subconscious.",
    keywords: ["dreams", "heist", "mind-bending", "action", "psychological", "thriller", "complex"]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    plot: "A vigilante superhero protects Gotham City while facing a criminal mastermind known as the Joker.",
    keywords: ["superhero", "dark", "crime", "justice", "thriller", "batman", "intense"]
  },
  {
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    rating: 8.0,
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    plot: "Two ambitious artists fall in love while pursuing their dreams in Los Angeles.",
    keywords: ["musical", "romance", "dreams", "jazz", "love", "artistic", "hollywood"]
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=750&fit=crop",
    plot: "A computer programmer discovers that reality is a simulation created by machines.",
    keywords: ["virtual reality", "action", "cyberpunk", "philosophical", "dystopia", "kung fu"]
  }
];

// Keyword mapping for common themes and concepts
const themeKeywords: Record<string, string[]> = {
  "thought-provoking": ["philosophical", "complex", "mind-bending", "psychological"],
  "action-packed": ["action", "intense", "kung fu", "superhero"],
  "emotional": ["romance", "love", "dramatic", "emotional"],
  "scary": ["horror", "thriller", "dark", "intense"],
  "funny": ["comedy", "humorous", "light-hearted"],
  "smart": ["complex", "philosophical", "psychological", "intelligent"]
};

function extractKeywords(query: string): string[] {
  const keywords: string[] = [];
  
  // Convert query to lowercase for matching
  const lowercaseQuery = query.toLowerCase();
  
  // Check for theme keywords
  Object.entries(themeKeywords).forEach(([theme, relatedKeywords]) => {
    if (lowercaseQuery.includes(theme)) {
      keywords.push(...relatedKeywords);
    }
  });
  
  // Check for genre indicators
  if (lowercaseQuery.includes("action")) keywords.push("action");
  if (lowercaseQuery.includes("romance")) keywords.push("romance", "love");
  if (lowercaseQuery.includes("sci-fi") || lowercaseQuery.includes("science fiction")) {
    keywords.push("sci-fi", "futuristic");
  }
  
  // Check for mood/tone indicators
  if (lowercaseQuery.includes("deep") || lowercaseQuery.includes("meaningful")) {
    keywords.push("philosophical", "complex");
  }
  if (lowercaseQuery.includes("exciting")) keywords.push("action", "intense");
  if (lowercaseQuery.includes("mind") || lowercaseQuery.includes("psychological")) {
    keywords.push("psychological", "mind-bending");
  }
  
  return [...new Set(keywords)]; // Remove duplicates
}

function calculateRelevanceScore(movie: Movie, queryKeywords: string[]): number {
  let score = 0;
  const movieKeywords = movie.keywords || [];
  
  // Check keyword matches
  queryKeywords.forEach(keyword => {
    if (movieKeywords.includes(keyword)) score += 2;
    if (movie.plot?.toLowerCase().includes(keyword.toLowerCase())) score += 1;
    if (movie.genre.toLowerCase().includes(keyword.toLowerCase())) score += 1.5;
  });
  
  // Boost score for highly rated movies
  score += (movie.rating - 5) / 10;
  
  return score;
}

export default function useMovieSuggestions(query: string) {
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSuggestions = async () => {
      if (!query.trim()) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const queryKeywords = extractKeywords(query);
      
      // Calculate relevance scores for all movies
      const scoredMovies = movieDatabase.map(movie => ({
        movie,
        score: calculateRelevanceScore(movie, queryKeywords)
      }));
      
      // Sort by relevance score and get top matches
      const results = scoredMovies
        .sort((a, b) => b.score - a.score)
        .filter(item => item.score > 0)
        .map(item => item.movie)
        .slice(0, 5);

      setSuggestions(results);
      setIsLoading(false);
    };

    getSuggestions();
  }, [query]);

  return { suggestions, isLoading };
}