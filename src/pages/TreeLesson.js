// src/pages/TreeLesson.js
import React from 'react';
import { TreeDeciduous } from 'lucide-react';

const TreeLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <TreeDeciduous className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">Arbre de Décision</h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            🌳 Comme un jeu de 20 questions
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Un arbre de décision pose une série de questions simples (oui/non)
            pour arriver à une décision finale, comme « C&apos;est un mammifère ? »
            puis « Ça vit dans l&apos;eau ? », etc.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-4 text-green-900">
            Exemple : Jouer au tennis ?
          </h4>
          <div className="flex justify-center">
            <div className="space-y-4">
              <div className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-center shadow-lg">
                Il pleut ?
              </div>
              <div className="flex gap-8">
                <div className="space-y-3">
                  <div className="text-center text-sm font-semibold text-gray-600">OUI</div>
                  <div className="bg-red-500 text-white px-6 py-3 rounded-lg text-center shadow">
                    ❌ Pas de tennis
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-center text-sm font-semibold text-gray-600">NON</div>
                  <div className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold text-center shadow-lg">
                    Il fait chaud ?
                  </div>
                </div>
              </div>
              <div className="flex gap-8 ml-32">
                <div className="space-y-3">
                  <div className="text-center text-sm font-semibold text-gray-600">OUI</div>
                  <div className="bg-green-500 text-white px-6 py-3 rounded-lg text-center shadow">
                    ✅ Tennis !
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-center text-sm font-semibold text-gray-600">NON</div>
                  <div className="bg-red-500 text-white px-6 py-3 rounded-lg text-center shadow">
                    ❌ Trop froid
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
            <h4 className="font-bold text-lg mb-3 text-green-900">✅ Avantages</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Facile à comprendre et à expliquer.</li>
              <li>• Gère des données numériques et catégorielles.</li>
              <li>• Pas besoin de normaliser les features.</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-300">
            <h4 className="font-bold text-lg mb-3 text-orange-900">⚠ Inconvénients</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Peut facilement overfitter (trop apprendre le détail).</li>
              <li>• Peut être instable (petit changement de données → arbre très différent).</li>
              <li>• Peut favoriser les classes majoritaires.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-xl">
          <h4 className="font-bold text-lg mb-3">📖 Vocabulaire de l&apos;arbre</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <strong>Racine :</strong> premier nœud (première question).
            </div>
            <div>
              <strong>Nœud :</strong> une question ou une décision intermédiaire.
            </div>
            <div>
              <strong>Branche :</strong> lien entre deux nœuds (réponse oui/non).
            </div>
            <div>
              <strong>Feuille :</strong> la réponse finale (classe prédite).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeLesson;
