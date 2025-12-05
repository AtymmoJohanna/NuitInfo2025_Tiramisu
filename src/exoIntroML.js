import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle, Award, RotateCcw, ChevronRight } from 'lucide-react';

// BACKEND - Base de données des questions (facilement modifiable)
const quizDatabase = {
  intro: {
    title: "Introduction au ML",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "La classification consiste à trier des données en différentes catégories.",
        answer: true,
        explanation: "Oui ! La classification est exactement comme un jeu de tri où on sépare les données en catégories."
      },
      {
        id: 2,
        type: "qcm",
        question: "Que sont les 'features' en Machine Learning ?",
        options: [
          "Les résultats finaux",
          "Les caractéristiques observées (couleur, taille, poids...)",
          "Les erreurs du modèle",
          "Les algorithmes utilisés"
        ],
        answer: 1,
        explanation: "Les features sont les caractéristiques qu'on observe pour faire nos prédictions !"
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Le Machine Learning peut prédire l'avenir avec 100% de certitude.",
        answer: false,
        explanation: "Faux ! Le ML fait des prédictions basées sur des patterns, mais il peut se tromper."
      }
    ]
  },
  knn: {
    title: "K-Nearest Neighbors",
    questions: [
      {
        id: 1,
        type: "qcm",
        question: "Comment fonctionne l'algorithme KNN ?",
        options: [
          "Il crée un arbre de décisions",
          "Il regarde les K voisins les plus proches et fait voter",
          "Il calcule une moyenne de toutes les données",
          "Il utilise des réseaux de neurones"
        ],
        answer: 1,
        explanation: "KNN regarde les K points les plus proches et utilise un système de vote !"
      },
      {
        id: 2,
        type: "vrai-faux",
        question: "Il est préférable de choisir K impair pour éviter les égalités.",
        answer: true,
        explanation: "Exact ! Un K impair (3, 5, 7) évite d'avoir des votes à égalité."
      },
      {
        id: 3,
        type: "qcm",
        question: "Quel est un inconvénient du KNN ?",
        options: [
          "Trop complexe à comprendre",
          "Ne fonctionne que sur des images",
          "Lent sur les gros datasets",
          "Nécessite beaucoup d'entraînement"
        ],
        answer: 2,
        explanation: "KNN doit calculer les distances pour chaque prédiction, ce qui le rend lent sur de gros datasets."
      }
    ]
  },
  tree: {
    title: "Arbres de Décision",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "Un arbre de décision fonctionne comme un jeu de 20 questions.",
        answer: true,
        explanation: "Oui ! Il pose des questions simples (oui/non) pour arriver à une décision."
      },
      {
        id: 2,
        type: "qcm",
        question: "Comment appelle-t-on la réponse finale d'un arbre ?",
        options: [
          "La racine",
          "La branche",
          "La feuille",
          "Le tronc"
        ],
        answer: 2,
        explanation: "La feuille est le nœud final qui donne la réponse !"
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Les arbres de décision nécessitent une normalisation des données.",
        answer: false,
        explanation: "Faux ! C'est un avantage des arbres : pas besoin de normalisation."
      },
      {
        id: 4,
        type: "qcm",
        question: "Quel est le risque principal des arbres de décision ?",
        options: [
          "Ils sont trop lents",
          "Ils peuvent overfitter (trop apprendre)",
          "Ils ne gèrent pas les données numériques",
          "Ils sont impossibles à visualiser"
        ],
        answer: 1,
        explanation: "L'overfitting est le risque principal : l'arbre peut apprendre par cœur au lieu de généraliser."
      }
    ]
  },
  forest: {
    title: "Forêts Aléatoires",
    questions: [
      {
        id: 1,
        type: "qcm",
        question: "Quelle est l'idée principale des forêts aléatoires ?",
        options: [
          "Utiliser un seul arbre très grand",
          "Créer plusieurs arbres et faire voter",
          "Remplacer les arbres par des graphes",
          "Utiliser des questions aléatoires"
        ],
        answer: 1,
        explanation: "On crée plein d'arbres différents et on fait voter tous les arbres !"
      },
      {
        id: 2,
        type: "vrai-faux",
        question: "Les forêts aléatoires sont plus précises qu'un seul arbre de décision.",
        answer: true,
        explanation: "Oui ! Plusieurs avis valent mieux qu'un seul. Les forêts sont plus robustes et précises."
      },
      {
        id: 3,
        type: "qcm",
        question: "Comment une forêt aléatoire prend-elle sa décision finale ?",
        options: [
          "Elle prend l'avis du premier arbre",
          "Elle fait la moyenne de tous les arbres",
          "La réponse la plus votée gagne",
          "Elle choisit aléatoirement"
        ],
        answer: 2,
        explanation: "C'est un système démocratique : la majorité gagne !"
      },
      {
        id: 4,
        type: "vrai-faux",
        question: "Les forêts aléatoires sont plus rapides qu'un seul arbre.",
        answer: false,
        explanation: "Faux ! Créer et exécuter plusieurs arbres prend plus de temps qu'un seul."
      }
    ]
  },
  confusion: {
    title: "Matrice de Confusion",
    questions: [
      {
        id: 1,
        type: "qcm",
        question: "Que représentent les Vrais Positifs (VP) ?",
        options: [
          "Les erreurs du modèle",
          "Les bonnes prédictions de la classe positive",
          "Le nombre total de prédictions",
          "Les cas non classifiés"
        ],
        answer: 1,
        explanation: "Les VP sont les cas où on prédit correctement la classe positive (ex: chat prédit comme chat) !"
      },
      {
        id: 2,
        type: "vrai-faux",
        question: "Les Faux Positifs sont les cas où le modèle se trompe en prédisant la classe positive.",
        answer: true,
        explanation: "Exact ! Un Faux Positif c'est quand on dit 'chat' mais c'est en fait un chien."
      },
      {
        id: 3,
        type: "qcm",
        question: "Comment calcule-t-on l'Accuracy (précision totale) ?",
        options: [
          "(VP + FP) / Total",
          "(VP + VN) / Total",
          "VP / (VP + FN)",
          "(FP + FN) / Total"
        ],
        answer: 1,
        explanation: "Accuracy = (Vrais Positifs + Vrais Négatifs) / Total. C'est le % de bonnes réponses !"
      },
      {
        id: 4,
        type: "vrai-faux",
        question: "Une matrice de confusion ne peut mesurer que des problèmes à 2 classes.",
        answer: false,
        explanation: "Faux ! On peut créer des matrices de confusion pour 3, 4 classes ou plus."
      },
      {
        id: 5,
        type: "qcm",
        question: "Le Rappel (Recall) mesure :",
        options: [
          "Le nombre total de prédictions",
          "Combien de vrais cas positifs on a trouvé",
          "Le temps de calcul",
          "La vitesse du modèle"
        ],
        answer: 1,
        explanation: "Le Rappel = VP / (VP + FN). Il mesure notre capacité à trouver tous les cas positifs !"
      }
    ]
  }
};

const MLQuizApp = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const topics = Object.keys(quizDatabase);

  const startQuiz = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
  };

  const currentQuiz = selectedTopic ? quizDatabase[selectedTopic] : null;
  const currentQuestion = currentQuiz ? currentQuiz.questions[currentQuestionIndex] : null;

  const handleAnswerSelect = (answer) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
  };

  const handleValidate = () => {
    if (selectedAnswer === null) return;

    const isCorrect = currentQuestion.type === "vrai-faux" 
      ? selectedAnswer === currentQuestion.answer
      : selectedAnswer === currentQuestion.answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, {
      question: currentQuestion.question,
      correct: isCorrect
    }]);

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setSelectedTopic(null);
  };

  // Écran de sélection des topics
  if (!selectedTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 pt-6">
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-4">
              <Brain className="inline-block w-8 h-8 text-yellow-300 mr-2" />
              <span className="text-white font-bold text-xl">ML Quiz</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Testez vos connaissances !
            </h1>
            <p className="text-xl text-purple-200">Choisissez un sujet pour commencer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => startQuiz(topic)}
                className="bg-white rounded-2xl p-6 shadow-2xl hover:scale-105 transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{quizDatabase[topic].title}</h3>
                  <ChevronRight className="w-8 h-8 text-purple-500 group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-gray-600 mb-4">
                  {quizDatabase[topic].questions.length} questions
                </p>
                <div className="flex gap-2">
                  {quizDatabase[topic].questions.map((q, i) => (
                    <div key={i} className="w-3 h-3 bg-purple-200 rounded-full"></div>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="text-center text-white/70 mt-8">
            <p>© 2024 ML Academy - Quiz Interactif 🚀</p>
          </div>
        </div>
      </div>
    );
  }

  // Écran de résultats
  if (quizCompleted) {
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8">
            <div className="text-center mb-8">
              <Award className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Quiz Terminé !</h2>
              <p className="text-xl text-gray-600">Voici vos résultats</p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-purple-900 mb-2">
                  {score}/{currentQuiz.questions.length}
                </div>
                <div className="text-3xl font-bold text-pink-600">
                  {percentage}%
                </div>
                <p className="text-gray-700 mt-2 text-lg">
                  {percentage >= 80 ? "🎉 Excellent travail !" :
                   percentage >= 60 ? "👍 Bien joué !" :
                   "💪 Continue à apprendre !"}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Récapitulatif :</h3>
              {answeredQuestions.map((q, index) => (
                <div key={index} className={p-4 rounded-lg flex items-start gap-3 ${q.correct ? 'bg-green-50' : 'bg-red-50'}}>
                  {q.correct ? 
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /> :
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  }
                  <div>
                    <p className="text-gray-700">{q.question}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => startQuiz(selectedTopic)}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Recommencer ce quiz
              </button>
              <button
                onClick={restartQuiz}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
              >
                Choisir un autre sujet
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Écran de quiz
  const isCorrect = currentQuestion.type === "vrai-faux" 
    ? selectedAnswer === currentQuestion.answer
    : selectedAnswer === currentQuestion.answer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-6 mt-6">
          <div className="flex items-center justify-between text-white">
            <div>
              <h2 className="text-xl font-bold">{currentQuiz.title}</h2>
              <p className="text-purple-200">Question {currentQuestionIndex + 1} sur {currentQuiz.questions.length}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{score}</div>
              <p className="text-sm text-purple-200">points</p>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-pink-400 h-2 rounded-full transition-all duration-500"
              style={{ width: ${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}% }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="mb-8">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              {currentQuestion.type === "vrai-faux" ? "VRAI ou FAUX" : "QCM"}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 leading-relaxed">
              {currentQuestion.question}
            </h3>
          </div>

          <div className="space-y-3 mb-8">
            {currentQuestion.type === "vrai-faux" ? (
              <>
                <button
                  onClick={() => handleAnswerSelect(true)}
                  disabled={showExplanation}
                  className={`w-full p-6 rounded-xl text-left font-semibold transition-all text-lg ${
                    selectedAnswer === true
                      ? showExplanation
                        ? isCorrect
                          ? 'bg-green-100 border-4 border-green-500'
                          : 'bg-red-100 border-4 border-red-500'
                        : 'bg-blue-100 border-4 border-blue-500'
                      : showExplanation && currentQuestion.answer === true
                      ? 'bg-green-100 border-4 border-green-500'
                      : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>✅ VRAI</span>
                    {showExplanation && currentQuestion.answer === true && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                  </div>
                </button>
                <button
                  onClick={() => handleAnswerSelect(false)}
                  disabled={showExplanation}
                  className={`w-full p-6 rounded-xl text-left font-semibold transition-all text-lg ${
                    selectedAnswer === false
                      ? showExplanation
                        ? isCorrect
                          ? 'bg-green-100 border-4 border-green-500'
                          : 'bg-red-100 border-4 border-red-500'
                        : 'bg-blue-100 border-4 border-blue-500'
                      : showExplanation && currentQuestion.answer === false
                      ? 'bg-green-100 border-4 border-green-500'
                      : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>❌ FAUX</span>
                    {showExplanation && currentQuestion.answer === false && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                  </div>
                </button>
              </>
            ) : (
              currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full p-6 rounded-xl text-left font-semibold transition-all ${
                    selectedAnswer === index
                      ? showExplanation
                        ? isCorrect
                          ? 'bg-green-100 border-4 border-green-500'
                          : 'bg-red-100 border-4 border-red-500'
                        : 'bg-blue-100 border-4 border-blue-500'
                      : showExplanation && currentQuestion.answer === index
                      ? 'bg-green-100 border-4 border-green-500'
                      : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showExplanation && currentQuestion.answer === index && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                  </div>
                </button>
              ))
            )}
          </div>

          {showExplanation && (
            <div className={p-6 rounded-2xl mb-6 ${isCorrect ? 'bg-green-50' : 'bg-orange-50'}}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-orange-600 flex-shrink-0" />
                )}
                <div>
                  <h4 className={font-bold text-lg mb-2 ${isCorrect ? 'text-green-900' : 'text-orange-900'}}>
                    {isCorrect ? "Bravo ! 🎉" : "Pas tout à fait... 🤔"}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {!showExplanation ? (
              <button
                onClick={handleValidate}
                disabled={selectedAnswer === null}
                className={`flex-1 py-4 rounded-xl font-bold transition-all ${
                  selectedAnswer === null
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                Valider ma réponse
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
              >
                {currentQuestionIndex < currentQuiz.questions.length - 1 ? "Question suivante →" : "Voir les résultats 🎯"}
              </button>
            )}
          </div>
        </div>

        <div className="text-center text-white/70 mt-6">
          <button
            onClick={restartQuiz}
            className="text-white/90 hover:text-white underline"
          >
            ← Retour aux sujets
          </button>
        </div>
      </div>
    </div>
  );
};

export default MLQuizApp;