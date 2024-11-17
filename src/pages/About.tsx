import React from 'react';
import { GraduationCap, Users, Brain } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h1 className="text-4xl font-bold text-white mb-8">About FilmGPT</h1>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Brain className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  CineConnect is an innovative movie recommendation platform designed to revolutionize 
                  how users discover movies. Developed as part of my Computational Social Science project, 
                  CineConnect employs cutting-edge natural language processing (NLP) techniques to analyze 
                  user preferences, reviews, and social interactions to provide personalized movie suggestions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">Team</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-white">Creator</h3>
                    <p className="text-gray-300">Rachit Gupta</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-white">Guided By</h3>
                    <p className="text-gray-300">Professor Rajesh Sharma</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">Technology Stack</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>• React with TypeScript for the frontend</li>
                  <li>• Advanced AI algorithms for personalized recommendations</li>
                  <li>• Natural Language Processing for understanding user preferences</li>
                  <li>• Modern UI/UX design principles for optimal user experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}