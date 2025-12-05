import React from 'react';
import { Brain, Lightbulb, Zap, ChevronRight } from 'lucide-react';

const IntroNNLesson = ({ index, total }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <Brain className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">
              Introduction aux Réseaux de Neurones
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
            Qu&apos;est-ce qu&apos;un Réseau de Neurones ?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Un réseau de neurones s&apos;inspire du cerveau humain. Comme ton cerveau
            a des neurones connectés, un réseau artificiel a des neurones
            numériques qui apprennent ensemble à partir de données.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <Lightbulb className="w-10 h-10 text-yellow-500 mb-3" />
            <h4 className="font-bold text-lg mb-2">Inspiration biologique</h4>
            <p className="text-gray-600">
              Dans ton cerveau, les neurones reçoivent des signaux, les
              combinent et envoient une réponse. Les réseaux de neurones
              artificiels fonctionnent de façon similaire, mais avec des nombres.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-500">
            <Zap className="w-10 h-10 text-pink-500 mb-3" />
            <h4 className="font-bold text-lg mb-2">Comment ça apprend ?</h4>
            <p className="text-gray-600">
              Le réseau regarde beaucoup d&apos;exemples, compare ses prédictions
              aux bonnes réponses, puis ajuste ses connexions pour faire de moins
              en moins d&apos;erreurs.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
          <h4 className="font-bold text-xl mb-3 text-indigo-900">
            Dans ce module, tu vas découvrir :
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-indigo-500" />
              <span>
                <strong>Perceptron</strong> – le neurone artificiel de base.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-indigo-500" />
              <span>
                <strong>Réseaux multicouches</strong> – plusieurs neurones
                ensemble.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-indigo-500" />
              <span>
                <strong>CNN</strong> – réseaux spécialisés pour les images.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-indigo-500" />
              <span>
                <strong>Reconnaissance d&apos;images</strong> – comment un modèle
                voit et comprend une image.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroNNLesson;
