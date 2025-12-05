// src/components/Sidebar.js
import React from 'react';
import {
  Brain,
  Network,
  TreeDeciduous,
  Layers,
  Grid3x3,
  Zap,
  Eye,
  CheckCircle,
  Image as ImageIcon,
} from 'lucide-react';

const Sidebar = ({ currentLesson, onChangeLesson, flatLessons, currentIndex }) => {
  const mlItems = [
    { key: 'intro', label: 'Introduction ML', icon: Brain },
    { key: 'introQuiz', label: 'Exercices – Intro ML', icon: CheckCircle },
    { key: 'knn', label: 'KNN', icon: Network },
    { key: 'knnQuiz', label: 'Exercices – KNN', icon: CheckCircle },
    { key: 'tree', label: 'Arbre de décision', icon: TreeDeciduous },
    { key: 'treeQuiz', label: 'Exercices – Arbre', icon: CheckCircle },
    { key: 'forest', label: 'Forêt aléatoire', icon: Layers },
    { key: 'forestQuiz', label: 'Exercices – Forêt', icon: CheckCircle },
    { key: 'confusion', label: 'Matrice de confusion', icon: Grid3x3 },
    { key: 'confusionQuiz', label: 'Exercices – Matrice', icon: CheckCircle },
  ];

  const nnItems = [
    { key: 'introNN', label: 'Intro Réseaux de neurones', icon: Brain },
    { key: 'introNNQuiz', label: 'Exercices – Intro NN', icon: CheckCircle },
    { key: 'perceptron', label: 'Perceptron', icon: Zap },
    { key: 'perceptronQuiz', label: 'Exercices – Perceptron', icon: CheckCircle },
    { key: 'multilayer', label: 'Réseaux multicouches', icon: Network },
    { key: 'multilayerQuiz', label: 'Exercices – Multicouches', icon: CheckCircle },
    { key: 'cnn', label: 'CNN', icon: Layers },
    { key: 'cnnQuiz', label: 'Exercices – CNN', icon: CheckCircle },
    { key: 'recognition', label: 'Reconnaissance d’images', icon: Eye },
    { key: 'recognitionQuiz', label: 'Exercices – Reconnaissance', icon: CheckCircle },
  ];

  const playItems = [
    { key: 'play', label: 'Jouer – images', icon: ImageIcon },
  ];

  const totalLessons = flatLessons
    ? flatLessons.length
    : mlItems.length + nnItems.length + playItems.length;

  return (
    <div className="w-64 bg-black/30 border-r border-white/10 text-white hidden md:flex flex-col h-screen overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Brain className="w-7 h-7 text-yellow-300" />
          <span>AI Academy</span>
        </h1>
        <p className="text-sm text-purple-200 mt-1">
          Machine Learning & Réseaux de neurones
        </p>
      </div>

      {/* Sections */}
      <div className="flex-1 py-4 space-y-6">
        {/* Bloc Machine Learning */}
        <div className="px-3">
          <p className="text-xs uppercase tracking-wide text-purple-300 mb-2">
            Machine Learning
          </p>
          <div className="space-y-1">
            {mlItems.map((item) => {
              const Icon = item.icon;
              const active = currentLesson === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onChangeLesson(item.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm font-semibold transition-all ${active
                      ? 'bg-white text-gray-900'
                      : 'text-white/80 hover:bg-white/10'
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 ${active ? 'text-purple-600' : 'text-purple-200'
                      }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bloc Réseaux de neurones */}
        <div className="px-3">
          <p className="text-xs uppercase tracking-wide text-purple-300 mb-2">
            Réseaux de neurones
          </p>
          <div className="space-y-1">
            {nnItems.map((item) => {
              const Icon = item.icon;
              const active = currentLesson === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onChangeLesson(item.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm font-semibold transition-all ${active
                      ? 'bg-white text-gray-900'
                      : 'text-white/80 hover:bg-white/10'
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 ${active ? 'text-purple-600' : 'text-purple-200'
                      }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bloc Jouer */}
        <div className="px-3">
          <p className="text-xs uppercase tracking-wide text-purple-300 mb-2">
            Jouer
          </p>
          <div className="space-y-1">
            {playItems.map((item) => {
              const Icon = item.icon;
              const active = currentLesson === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onChangeLesson(item.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm font-semibold transition-all ${active
                      ? 'bg-white text-gray-900'
                      : 'text-white/80 hover:bg-white/10'
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 ${active ? 'text-purple-600' : 'text-purple-200'
                      }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer progression */}
      <div className="px-4 py-4 border-t border-white/10 text-xs text-purple-200">
        <p>
          Leçon {currentIndex + 1} / {totalLessons}
        </p>
        <div className="w-full bg-white/10 rounded-full h-1 mt-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
            style={{
              width: `${((currentIndex + 1) / totalLessons) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
