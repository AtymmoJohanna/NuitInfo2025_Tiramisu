import React from 'react';
import { Eye } from 'lucide-react';

const RecognitionLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Eye className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">Reconnaissance d&apos;images</h2>
            <p className="text-white/90">
              Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-pink-900 mb-4">
            Du pixel à la prédiction
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Un système de reconnaissance d&apos;images transforme une image en
            nombres, les fait passer dans un CNN, puis choisit l&apos;étiquette
            la plus probable : « chat », « chien », « voiture », etc.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-4 text-pink-900">
            Le processus complet
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <strong>Entrée : une image</strong>
                <p className="text-gray-600 mt-1">
                  L&apos;image est redimensionnée (par exemple 224×224 pixels) et
                  convertie en nombres (valeurs RGB).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <strong>Passage dans le CNN</strong>
                <p className="text-gray-600 mt-1">
                  Les couches convolutives et de pooling extraient des features
                  de plus en plus abstraits.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <strong>Couche de sortie</strong>
                <p className="text-gray-600 mt-1">
                  Une couche entièrement connectée donne une probabilité pour
                  chaque classe possible.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <strong>Décision</strong>
                <p className="text-gray-600 mt-1">
                  On choisit la classe avec la probabilité la plus élevée (par
                  exemple « chat » à 95&nbsp;%).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-4">Modèles célèbres</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-blue-900">AlexNet (2012)</strong>
              <p className="text-gray-700">
                Un des premiers modèles CNN à battre largement les humains sur
                un gros concours d&apos;images.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-purple-900">VGG (2014)</strong>
              <p className="text-gray-700">
                Architecture simple mais profonde, souvent utilisée pour le
                transfert d&apos;apprentissage.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <strong className="text-green-900">ResNet (2015)</strong>
              <p className="text-gray-700">
                Permet d&apos;empiler beaucoup de couches grâce aux connexions
                résiduelles.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-4">Et après ?</h4>
          <p className="text-gray-700 text-lg">
            Avec ces bases, tu peux commencer à utiliser des modèles pré-entraînés
            (transfer learning) dans des bibliothèques comme TensorFlow ou
            PyTorch pour créer ta propre application de reconnaissance d&apos;images.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecognitionLesson;
