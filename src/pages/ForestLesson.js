// src/pages/ForestLesson.js
import React from 'react';
import { Layers } from 'lucide-react';

const ForestLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Layers className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">Forêt Aléatoire</h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            🌲 Plusieurs avis valent mieux qu&apos;un
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Une forêt aléatoire, c&apos;est un ensemble de nombreux arbres de décision.
            Chaque arbre donne son avis, puis on fait voter tous les arbres pour décider de la classe.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-4 text-emerald-900">Comment ça marche ?</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <strong>Créer plusieurs arbres différents</strong>
                <p className="text-sm text-gray-600">
                  Chaque arbre voit une version légèrement différente des données
                  (échantillons et/ou features).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <strong>Chaque arbre fait une prédiction</strong>
                <p className="text-sm text-gray-600">
                  Chaque arbre de la forêt donne sa propre classe prédite.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <strong>Vote majoritaire</strong>
                <p className="text-sm text-gray-600">
                  La classe la plus votée par les arbres devient la prédiction finale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-4">🗳 Exemple de vote</h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg">🌳 Arbre 1 : « C&apos;est un chat » 🐱</div>
            <div className="bg-white p-3 rounded-lg">🌲 Arbre 2 : « C&apos;est un chat » 🐱</div>
            <div className="bg-white p-3 rounded-lg">🌳 Arbre 3 : « C&apos;est un chien » 🐶</div>
            <div className="bg-white p-3 rounded-lg">🌲 Arbre 4 : « C&apos;est un chat » 🐱</div>
            <div className="bg-green-200 p-4 rounded-lg font-bold text-center text-lg">
              🎯 Résultat : chat (3 votes sur 4).
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
            <h4 className="font-bold text-lg mb-3 text-green-900">✅ Avantages</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Souvent très précis et robuste.</li>
              <li>• Réduit l&apos;overfitting par rapport à un arbre seul.</li>
              <li>• Gère bien les grands jeux de données.</li>
              <li>• Moins sensible au bruit et aux valeurs extrêmes.</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-300">
            <h4 className="font-bold text-lg mb-3 text-orange-900">⚠ Inconvénients</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Plus lent en prédiction qu&apos;un seul arbre.</li>
              <li>• Plus difficile à interpréter (effet « boîte noire »).</li>
              <li>• Consomme plus de mémoire.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestLesson;
