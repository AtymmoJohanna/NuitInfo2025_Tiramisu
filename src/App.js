// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

// Pages Machine Learning
import IntroLesson from './pages/IntroLesson';
import KnLesson from './pages/KnLesson';
import TreeLesson from './pages/TreeLesson';
import ForestLesson from './pages/ForestLesson';
import ConfusionLesson from './pages/ConfusionLesson';
import IntroQuizLesson from './pages/IntroQuizLesson';
import KnnQuizLesson from './pages/KnnQuizLesson';
import TreeQuizLesson from './pages/TreeQuizLesson';
import ForestQuizLesson from './pages/ForestQuizLesson';
import ConfusionQuizLesson from './pages/ConfusionQuizLesson';
import LearningHomePage from './pages/LearningHomePage';


// Pages Réseaux de neurones
import IntroNNLesson from './pages/IntroNNLesson';
import PerceptronLesson from './pages/PerceptronLesson';
import MultilayerLesson from './pages/MultilayerLesson';
import CNNLesson from './pages/CNNLesson';
import RecognitionLesson from './pages/RecognitionLesson';
import PlayImageLab from './pages/PlayImageLab';

// Quiz NN
import IntroNNQuizLesson from './pages/IntroNNQuizLesson';
import PerceptronQuizLesson from './pages/PerceptronQuizLesson';
import MultilayerQuizLesson from './pages/MultilayerQuizLesson';
import CNNQuizLesson from './pages/CNNQuizLesson';
import RecognitionQuizLesson from './pages/RecognitionQuizLesson';

// Définition des sections et de l'ordre global
const sections = {
  ml: {
    label: 'Machine Learning',
    lessons: [
      { key: 'intro', title: 'Introduction ML' },
      { key: 'knn', title: 'KNN' },
      { key: 'tree', title: 'Arbre de décision' },
      { key: 'forest', title: 'Forêt aléatoire' },
      { key: 'confusion', title: 'Matrice de confusion' },
    ],
  },
  nn: {
    label: 'Réseaux de neurones',
    lessons: [
      { key: 'introNN', title: 'Intro Réseaux de neurones' },
      { key: 'perceptron', title: 'Perceptron' },
      { key: 'multilayer', title: 'Réseaux multicouches' },
      { key: 'cnn', title: 'CNN' },
      { key: 'recognition', title: 'Reconnaissance d’images' },
    ],
  },

  exercices: {
    label: 'Réseaux de neurones',
    exos: [
      { key: 'introQuiz', title: 'Exercices – Intro ML' },
      { key: 'knnQuiz', title: 'Exercices – KNN' },
      { key: 'treeQuiz', title: 'Exercices – Arbre' },
      { key: 'forestQuiz', title: 'Exercices – Forêt' },
      { key: 'confusionQuiz', title: 'Exercices – Matrice' },
      { key: 'introNN', title: 'Intro Réseaux de neurones' },
      { key: 'introNNQuiz', title: 'Exercices – Intro NN' },
      { key: 'perceptronQuiz', title: 'Exercices – Perceptron' },
      { key: 'multilayerQuiz', title: 'Exercices – Multicouches' },
      { key: 'cnnQuiz', title: 'Exercices – CNN' },
      { key: 'recognitionQuiz', title: 'Exercices – Reconnaissance' },
    ],
  },
};

// Tableau linéaire pour la navigation suivant/précédent
const flatLessons = [
  { key: 'home', title: "Accueil IA Academy" },

  { key: 'intro', title: 'Introduction ML' },
  { key: 'introQuiz', title: 'Exercices – Intro ML' },

  { key: 'knn', title: 'KNN' },
  { key: 'knnQuiz', title: 'Exercices – KNN' },

  { key: 'tree', title: 'Arbre de décision' },
  { key: 'treeQuiz', title: 'Exercices – Arbre' },

  { key: 'forest', title: 'Forêt aléatoire' },
  { key: 'forestQuiz', title: 'Exercices – Forêt' },

  { key: 'confusion', title: 'Matrice de confusion' },
  { key: 'confusionQuiz', title: 'Exercices – Matrice' },

  { key: 'introNN', title: 'Intro Réseaux de neurones' },
  { key: 'introNN', title: 'Intro Réseaux de neurones' },
  { key: 'introNNQuiz', title: 'Exercices – Intro NN' },

  { key: 'perceptron', title: 'Perceptron' },
  { key: 'perceptronQuiz', title: 'Exercices – Perceptron' },

  { key: 'multilayer', title: 'Réseaux multicouches' },
  { key: 'multilayerQuiz', title: 'Exercices – Multicouches' },

  { key: 'cnn', title: 'CNN' },
  { key: 'cnnQuiz', title: 'Exercices – CNN' },

  { key: 'recognition', title: 'Reconnaissance d’images' },
  { key: 'recognitionQuiz', title: 'Exercices – Reconnaissance' },
];

function App() {
  const [currentLesson, setCurrentLesson] = useState('home');

  const contentRef = useRef(null);

  const currentIndex = flatLessons.findIndex(
    (l) => l.key === currentLesson
  );

  // Scroll en haut de la zone de contenu à chaque changement de leçon
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', // mets 'auto' si tu veux sans animation
      });
    }
  }, [currentLesson]);

  const renderLesson = () => {
    const index = currentIndex + 1;
    const total = flatLessons.length;

    switch (currentLesson) {
      case 'home':
        return <LearningHomePage onStart={setCurrentLesson} />;

      // Machine Learning
      case 'intro':
        return <IntroLesson index={index} total={total} />;
      case 'knn':
        return <KnLesson index={index} total={total} />;
      case 'tree':
        return <TreeLesson index={index} total={total} />;
      case 'forest':
        return <ForestLesson index={index} total={total} />;
      case 'confusion':
        return <ConfusionLesson index={index} total={total} />;

      // Réseaux de neurones
      case 'introNN':
        return <IntroNNLesson index={index} total={total} />;
      case 'perceptron':
        return <PerceptronLesson index={index} total={total} />;
      case 'multilayer':
        return <MultilayerLesson index={index} total={total} />;
      case 'cnn':
        return <CNNLesson index={index} total={total} />;
      case 'recognition':
        return <RecognitionLesson index={index} total={total} />;

      //play
      case 'play':
        return <PlayImageLab index={index} total={total} />;

      //Exercices
      case 'introQuiz':
        return <IntroQuizLesson index={index} total={total} />;
      case 'knnQuiz':
        return <KnnQuizLesson index={index} total={total} />;
      case 'treeQuiz':
        return <TreeQuizLesson index={index} total={total} />;
      case 'forestQuiz':
        return <ForestQuizLesson index={index} total={total} />;
      case 'confusionQuiz':
        return <ConfusionQuizLesson index={index} total={total} />;


      case 'introNNQuiz':
        return <IntroNNQuizLesson index={index} total={total} />;
      case 'perceptronQuiz':
        return <PerceptronQuizLesson index={index} total={total} />;
      case 'multilayerQuiz':
        return <MultilayerQuizLesson index={index} total={total} />;
      case 'cnnQuiz':
        return <CNNQuizLesson index={index} total={total} />;
      case 'recognitionQuiz':
        return <RecognitionQuizLesson index={index} total={total} />;


      default:
        return null;
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentLesson(flatLessons[currentIndex - 1].key);
    }
  };

  const goNext = () => {
    if (currentIndex < flatLessons.length - 1) {
      setCurrentLesson(flatLessons[currentIndex + 1].key);
    }
  };

  return (
    <Layout>
      {/* Sidebar seulement si on n’est pas sur la page d’accueil */}
      {currentLesson !== 'home' && (
        <Sidebar
          currentLesson={currentLesson}
          onChangeLesson={setCurrentLesson}
          flatLessons={flatLessons}
          currentIndex={currentIndex}
        />
      )}

      <div
        ref={contentRef}
        className={
          currentLesson === 'home'
            ? 'flex-1 h-screen overflow-y-auto'
            : 'flex-1 md:ml-4 h-screen overflow-y-auto'
        }
      >
        <div className="p-4 md:p-8 space-y-6">
          {renderLesson()}

          {/* Boutons Suivant/Précédent et footer uniquement hors home */}
          {currentLesson !== 'home' && (
            <>
              <div className="flex justify-between mt-8 pt-6 border-t-2">
                <button
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${currentIndex === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                    }`}
                >
                  ← Précédent
                </button>

                <button
                  onClick={goNext}
                  disabled={currentIndex === flatLessons.length - 1}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${currentIndex === flatLessons.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105'
                    }`}
                >
                  Suivant →
                </button>
              </div>

              <div className="text-center text-white/70 pb-6">
                <p>© 2024 AI Academy - Apprends en t'amusant ! 🎓✨</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );

}

export default App;
