import React from 'react';
import { Zap } from 'lucide-react';

const PerceptronLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Zap className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">Le Perceptron</h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Le premier neurone artificiel
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Le perceptron est un modèle très simple : il prend des entrées, les
            multiplie par des poids, additionne tout, puis applique une fonction
            de seuil pour donner une réponse 0 ou 1.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-4 text-blue-900">
            Comment ça fonctionne ?
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <strong>Recevoir les entrées</strong>
                <p className="text-sm text-gray-600">
                  Par exemple : taille = 1,80&nbsp;m, poids = 75&nbsp;kg.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <strong>Combiner avec des poids</strong>
                <p className="text-sm text-gray-600">
                  On calcule une somme pondérée : 1,8 × 0,5 + 75 × 0,3 = 23,4.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <strong>Appliquer une fonction d&apos;activation</strong>
                <p className="text-sm text-gray-600">
                  Si la somme est au-dessus d&apos;un seuil, la sortie vaut 1,
                  sinon elle vaut 0.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
            <h4 className="font-bold text-lg mb-3 text-green-900">Avantages</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Très simple à comprendre.</li>
              <li>• Calculs rapides.</li>
              <li>• Base de tous les réseaux de neurones modernes.</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-300">
            <h4 className="font-bold text-lg mb-3 text-orange-900">Limitations</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Ne résout que des problèmes linéaires.</li>
              <li>• Pas assez puissant pour les tâches complexes.</li>
              <li>• Ne peut pas apprendre le problème XOR.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerceptronLesson;
