// src/pages/LearningHomePage.js
import React from 'react';
import { Brain, Layers, TrendingUp, ChevronRight, Sparkles, BookOpen, Image as ImageIcon } from 'lucide-react';

const LearningHomePage = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6">
            <Brain className="inline-block w-10 h-10 text-yellow-300 mr-3" />
            <span className="text-white font-bold text-2xl">AI Academy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Apprends l&apos;Intelligence Artificielle
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-2">
            Choisis ton cours et commence ton aventure ! 🚀
          </p>
          <div className="flex items-center justify-center gap-2 text-purple-300">
            <Sparkles className="w-5 h-5" />
            <p className="text-lg">Des cours interactifs et amusants</p>
          </div>
        </div>

        {/* Cours Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Machine Learning Course Card */}
          <button
            onClick={() => onStart('intro')}
            className="group bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300 text-left relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Machine Learning
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Apprends les bases du Machine Learning avec des algorithmes simples et puissants.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Introduction au ML</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>K-Nearest Neighbors</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Arbres de décision</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Forêt aléatoire</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Matrice de confusion</span>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-green-700 font-semibold">5 leçons</p>
                </div>
                <div className="bg-emerald-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-emerald-700 font-semibold">Quiz inclus</p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl font-bold group-hover:shadow-lg">
                <span className="text-lg">Commencer le cours</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </button>


          {/* CNN Course Card */}
          <button
            onClick={() => onStart('introNN')}
            className="group bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300 text-left relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Réseaux de neurones 
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Découvre comment les réseaux de neurones fonctionnent pour reconnaître des images.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Introduction réseaux de neurones</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Perceptron</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Réseaux multicouches</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>CNN </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Reconnaissance d'images</span>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="bg-indigo-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-indigo-700 font-semibold">5 leçons</p>
                </div>
                <div className="bg-purple-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-purple-700 font-semibold">Quiz inclus</p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-4 rounded-xl font-bold group-hover:shadow-lg">
                <span className="text-lg">Commencer le cours</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </button>


          {/* Jouer – images */}
          <button
            onClick={() => onStart('play')}
            className="group bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300 text-left relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-50 opacity-50"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Jouer avec l&apos;IA
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Charge une image et laisse l&apos;IA deviner ce qu&apos;elle contient, puis analyse comment elle a décidé.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Expérimenter avec un modèle pré‑entraîné</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Observer les prédictions</span>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-4 rounded-xl font-bold group-hover:shadow-lg">
                <span className="text-lg">Commencer à jouer</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </button>
        </div>

        {/* Info Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8">
          <div className="text-center mb-6">
            <BookOpen className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Comment ça marche ?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-purple-100">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">1</div>
              <p className="font-semibold mb-1">Choisis ton cours</p>
              <p className="text-sm text-purple-200">CNN ou Machine Learning</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">2</div>
              <p className="font-semibold mb-1">Apprends pas à pas</p>
              <p className="text-sm text-purple-200">Des leçons claires et simples</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">3</div>
              <p className="font-semibold mb-1">Teste tes connaissances</p>
              <p className="text-sm text-purple-200">Quiz interactifs amusants</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white/70 pb-8">
          <p className="text-lg">© 2025 AI Academy - Apprends en t'amusant ! 🎓✨</p>
          </div>
      </div>
    </div>
  );
};

export default LearningHomePage;
