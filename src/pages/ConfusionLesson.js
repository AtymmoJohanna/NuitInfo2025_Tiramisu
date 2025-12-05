// src/pages/ConfusionLesson.js
import React from 'react';
import { Grid3x3 } from 'lucide-react';

const ConfusionLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Grid3x3 className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">Matrice de Confusion</h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-pink-900 mb-4">
            📊 Comment mesurer la performance ?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            La matrice de confusion montre où le modèle se trompe et où il réussit,
            comme un bulletin de notes détaillé pour une classification binaire (ex : chat / chien).
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-4 text-pink-900">La Matrice (2 classes)</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-2 border-gray-300 p-3 bg-gray-100"></th>
                  <th className="border-2 border-gray-300 p-3 bg-blue-100" colSpan={2}>
                    Prédiction
                  </th>
                </tr>
                <tr>
                  <th className="border-2 border-gray-300 p-3 bg-gray-100"></th>
                  <th className="border-2 border-gray-300 p-3 bg-blue-100">Chat 🐱</th>
                  <th className="border-2 border-gray-300 p-3 bg-blue-100">Chien 🐶</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-2 border-gray-300 p-3 bg-purple-100">Réalité Chat 🐱</th>
                  <td className="border-2 border-gray-300 p-4 bg-green-100 text-center">
                    <div className="text-3xl font-bold text-green-700">85</div>
                    <div className="text-sm text-gray-600">Vrais Positifs (VP)</div>
                  </td>
                  <td className="border-2 border-gray-300 p-4 bg-red-100 text-center">
                    <div className="text-3xl font-bold text-red-700">5</div>
                    <div className="text-sm text-gray-600">Faux Négatifs (FN)</div>
                  </td>
                </tr>
                <tr>
                  <th className="border-2 border-gray-300 p-3 bg-purple-100">Réalité Chien 🐶</th>
                  <td className="border-2 border-gray-300 p-4 bg-red-100 text-center">
                    <div className="text-3xl font-bold text-red-700">10</div>
                    <div className="text-sm text-gray-600">Faux Positifs (FP)</div>
                  </td>
                  <td className="border-2 border-gray-300 p-4 bg-green-100 text-center">
                    <div className="text-3xl font-bold text-green-700">90</div>
                    <div className="text-sm text-gray-600">Vrais Négatifs (VN)</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
            <h4 className="font-bold text-lg mb-3 text-green-900">✅ Cases vertes = BIEN</h4>
            <p className="text-gray-700 mb-2">
              <strong>VP :</strong> Chat prédit comme chat.
            </p>
            <p className="text-gray-700">
              <strong>VN :</strong> Chien prédit comme chien.
            </p>
          </div>

          <div className="bg-red-50 p-5 rounded-xl border-2 border-red-300">
            <h4 className="font-bold text-lg mb-3 text-red-900">❌ Cases rouges = ERREURS</h4>
            <p className="text-gray-700 mb-2">
              <strong>FP :</strong> Chien prédit comme chat.
            </p>
            <p className="text-gray-700">
              <strong>FN :</strong> Chat prédit comme chien.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-4">📐 Métriques importantes</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-indigo-900">Accuracy :</strong>
              <p className="text-gray-700">
                (VP + VN) / Total = (85 + 90) / 190 ≈ 92.1&nbsp;% de bonnes réponses.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <strong className="text-purple-900">Précision (pour les chats) :</strong>
              <p className="text-gray-700">
                P = VP / (VP + FP) = 85 / (85 + 10) ≈ 89.5&nbsp;% → quand le modèle dit « chat », il a
                raison environ 89&nbsp;% du temps.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <strong className="text-pink-900">Rappel (pour les chats) :</strong>
              <p className="text-gray-700">
                R = VP / (VP + FN) = 85 / (85 + 5) ≈ 94.4&nbsp;% → le modèle retrouve environ 94&nbsp;% des chats.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <strong className="text-pink-900">F-1 Score :</strong>
              <p className="text-gray-700">
                F = 2*P*R / (P + R) = 2*89*94 / (89 + 94) ≈ 91.9&nbsp;% → Le F1‑score sert à résumer en un seul nombre la performance d’un modèle en tenant compte à la fois de la précision et du rappel. Plus il est élevé, plus le modele est performant
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfusionLesson;
