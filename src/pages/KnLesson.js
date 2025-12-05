// src/pages/KnLesson.js
import React from 'react';
import { Network } from 'lucide-react';

const KnLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Network className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">K-Nearest Neighbors (KNN)</h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Principe général */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            🎯 Le principe : « Dis-moi qui sont tes voisins… »
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            KNN regarde les K points les plus proches de l&apos;exemple à classer et
            fait un vote. Si par exemple les 3 voisins les plus proches sont des
            chats, alors le nouvel exemple sera classé comme un chat 🐱.
          </p>
        </div>

        {/* Exemple visuel */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-4 text-blue-900">Exemple visuel</h4>
          <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-blue-300 overflow-hidden">
            {/* Points rouges (classe A) */}
            <div className="absolute top-12 left-12 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute top-20 left-24 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute top-16 left-32 w-4 h-4 bg-red-500 rounded-full"></div>

            {/* Points bleus (classe B) */}
            <div className="absolute bottom-12 right-12 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-20 right-24 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-16 right-32 w-4 h-4 bg-blue-500 rounded-full"></div>

            {/* Point à classifier */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>

            {/* Légende */}
            <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow text-sm">
              <span className="text-red-500 font-bold">● Classe A</span> |{' '}
              <span className="text-blue-500 font-bold">● Classe B</span> |{' '}
              <span className="text-yellow-500 font-bold">● Point à classifier</span>
            </div>
          </div>
        </div>

        {/* Avantages / Inconvénients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
            <h4 className="font-bold text-lg mb-3 text-green-900">✅ Avantages</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Très simple à comprendre.</li>
              <li>• Pas de vraie phase d&apos;entraînement (on garde juste les données).</li>
              <li>• Fonctionne bien sur des petits jeux de données.</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-300">
            <h4 className="font-bold text-lg mb-3 text-orange-900">⚠ Inconvénients</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Peut devenir lent sur de très gros jeux de données.</li>
              <li>• Sensible aux features inutiles ou mal normalisées.</li>
              <li>• Il faut bien choisir la valeur de K.</li>
            </ul>
          </div>
        </div>

        {/* Astuce choix de K */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-5 rounded-xl">
          <h4 className="font-bold text-lg mb-3">
            💡 Astuce : comment choisir K ?
          </h4>
          <p className="text-gray-700">
            Si K = 1, le modèle est très sensible au bruit (un seul voisin peut être bizarre).<br />
            Si K est trop grand (proche du nombre total d&apos;exemples), le modèle donne presque toujours la même classe.<br />
            En pratique, on choisit souvent un K impair (3, 5, 7, …) pour éviter les égalités lors du vote.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnLesson;
