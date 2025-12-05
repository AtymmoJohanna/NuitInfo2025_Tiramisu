import React from 'react';
import { Network } from 'lucide-react';

const MultilayerLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Network className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">Réseaux Multicouches</h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            Plus de couches = plus de puissance
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Au lieu d&apos;avoir un seul neurone, on en empile plusieurs en
            couches. Chaque couche apprend des motifs de plus en plus
            complexes, ce qui permet au réseau de résoudre des problèmes
            non-linéaires.
          </p>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-4">
            Comment le réseau apprend : backpropagation
          </h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-blue-900">1. Forward pass</strong>
              <p className="text-gray-700">
                Les données traversent les couches du réseau et produisent une
                prédiction.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-purple-900">2. Calcul de l&apos;erreur</strong>
              <p className="text-gray-700">
                On compare la prédiction à la vraie réponse pour mesurer
                l&apos;erreur.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-green-900">3. Backward pass</strong>
              <p className="text-gray-700">
                L&apos;erreur est propagée en arrière et les poids sont ajustés
                pour réduire cette erreur.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-orange-900">
                4. Répéter des milliers de fois
              </strong>
              <p className="text-gray-700">
                Au fil des itérations, le réseau devient de plus en plus
                précis.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
            <h4 className="font-bold text-lg mb-3 text-green-900">
              Pourquoi c&apos;est puissant ?
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Peut apprendre des motifs très complexes.</li>
              <li>• Résout des problèmes non-linéaires.</li>
              <li>
                • Utilisé partout : reconnaissance vocale, vision par ordinateur,
                traitement du texte.
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl border-2 border-blue-300">
            <h4 className="font-bold text-lg mb-3 text-blue-900">
              Fonctions d&apos;activation
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                • <strong>ReLU</strong> : simple et efficace, souvent utilisée
                dans les couches cachées.
              </li>
              <li>
                • <strong>Sigmoïde</strong> : donne des valeurs entre 0 et 1, utile
                pour des probabilités.
              </li>
              <li>
                • <strong>Tanh</strong> : valeurs entre -1 et 1, centrées sur 0.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultilayerLesson;
