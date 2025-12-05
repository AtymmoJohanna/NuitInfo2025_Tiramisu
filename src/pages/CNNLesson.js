import React from 'react';
import { Layers } from 'lucide-react';

const CNNLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Layers className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">CNN : réseaux pour les images</h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            Les CNN, spécialistes de la vision
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Les réseaux de neurones convolutionnels (CNN) sont conçus pour
            traiter des images. Ils apprennent automatiquement à détecter des
            formes, des textures et des objets.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-4 text-indigo-900">
            Les 3 types de couches principaux
          </h4>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-bold text-lg mb-2 text-blue-900">
                1. Couche convolutive
              </h5>
              <p className="text-gray-700">
                Applique de petits filtres sur l&apos;image pour détecter des
                bords, des motifs et des textures.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-bold text-lg mb-2 text-purple-900">
                2. Couche de pooling
              </h5>
              <p className="text-gray-700">
                Réduit la taille des cartes de features en gardant l&apos;essentiel,
                ce qui rend le modèle plus rapide et plus robuste.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h5 className="font-bold text-lg mb-2 text-green-900">
                3. Couches entièrement connectées
              </h5>
              <p className="text-gray-700">
                À la fin, ces couches combinent toutes les informations pour
                produire la décision finale (chat, chien, voiture…).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-4">
            Comment un CNN voit une image
          </h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg flex items-center gap-3">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <p>
                Les premières couches détectent des éléments simples : lignes
                horizontales, verticales, coins.
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg flex items-center gap-3">
              <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <p>
                Les couches suivantes combinent ces éléments pour reconnaître des
                formes : yeux, oreilles, roues, etc.
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg flex items-center gap-3">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <p>
                Les dernières couches détectent des objets complets : un visage
                de chat, une voiture, un panneau de signalisation.
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
              <li>• Très performant sur les images.</li>
              <li>• Apprend automatiquement les bons features.</li>
              <li>• Tolère les petits déplacements de l&apos;objet dans l&apos;image.</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border-2 border-orange-300">
            <h4 className="font-bold text-lg mb-3 text-orange-900">
              Applications
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Reconnaissance faciale.</li>
              <li>• Voitures autonomes.</li>
              <li>• Diagnostic médical sur images.</li>
              <li>• Filtres photo (Snapchat, Instagram).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNNLesson;
