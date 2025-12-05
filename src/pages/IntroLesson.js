import React from 'react';
import { Brain, ChevronRight, Lightbulb, Target } from 'lucide-react';

const IntroLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Brain className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">
              Bienvenue dans le Machine Learning !
            </h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            Qu&apos;est-ce que la Classification ?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            La classification est comme un jeu de tri ! 🎯 Imagine que tu as des
            fruits et tu veux les séparer en catégories : pommes, oranges, bananes...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <Lightbulb className="w-10 h-10 text-yellow-500 mb-3" />
            <h4 className="font-bold text-lg mb-2">Comment ça marche ?</h4>
            <p className="text-gray-600">
              Le ML regarde des exemples et apprend à reconnaître des patterns
              (motifs) pour faire des prédictions !
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-500">
            <Target className="w-10 h-10 text-pink-500 mb-3" />
            <h4 className="font-bold text-lg mb-2">Les Features</h4>
            <p className="text-gray-600">
              Ce sont les caractéristiques qu&apos;on observe : couleur, taille,
              poids... Plus on a d&apos;infos, mieux on prédit !
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
          <h4 className="font-bold text-xl mb-3 text-indigo-900">
            📚 Dans ce cours, tu vas découvrir :
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-indigo-500" />
              <span>KNN - les voisins les plus proches</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-indigo-500" />
              <span>Arbres de décision - comme un jeu de 20 questions</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-indigo-500" />
              <span>Forêts aléatoires - plusieurs arbres valent mieux qu&apos;un</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-indigo-500" />
              <span>Matrice de confusion - mesurer la performance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroLesson;
