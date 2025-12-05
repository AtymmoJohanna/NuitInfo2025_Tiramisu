// src/pages/GenericQuizPage.js
import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle } from 'lucide-react';
import { quizDatabase } from '../data/quizDatabase';

const GenericQuizPage = ({ topicKey, database }) => {
  const db = database || quizDatabase;
  const currentQuiz = db[topicKey];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
  };

  const handleValidate = () => {
    if (selectedAnswer === null) return;

    const isCorrect =
      currentQuestion.type === 'vrai-faux'
        ? selectedAnswer === currentQuestion.answer
        : selectedAnswer === currentQuestion.answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnsweredQuestions((prev) => [
      ...prev,
      { question: currentQuestion.question, correct: isCorrect },
    ]);

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
  };

  if (quizCompleted) {
    const percentage = Math.round(
      (score / currentQuiz.questions.length) * 100
    );

    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <XCircle className="w-0 h-0" /> {/* placeholder pour pas changer ton style */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Quiz terminé !
          </h2>
          <p className="text-lg text-gray-600">
            Résultats pour : {currentQuiz.title}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-900 mb-2">
              {score}/{currentQuiz.questions.length}
            </div>
            <div className="text-2xl font-bold text-pink-600">
              {percentage}%
            </div>
          </div>
        </div>

        <div className="space-y-3 my-6">
          {answeredQuestions.map((q, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg flex items-start gap-3 ${
                q.correct ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              {q.correct ? (
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              )}
              <p className="text-gray-700">{q.question}</p>
            </div>
          ))}
        </div>

        <button
          onClick={restartQuiz}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
        >
          Recommencer
        </button>
      </div>
    );
  }

  const isCorrect =
    currentQuestion.type === 'vrai-faux'
      ? selectedAnswer === currentQuestion.answer
      : selectedAnswer === currentQuestion.answer;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-6 border border-purple-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-7 h-7 text-purple-600" />
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Quiz – {currentQuiz.title}
              </h2>
              <p className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} sur{' '}
                {currentQuiz.questions.length}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-700">{score}</div>
            <p className="text-xs text-gray-500">points</p>
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mt-2 mb-6 bg-gray-100 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-yellow-400 to-pink-500 h-2 rounded-full transition-all duration-500"
          style={{
            width: `${
              ((currentQuestionIndex + 1) /
                currentQuiz.questions.length) *
              100
            }%`,
          }}
        ></div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
          {currentQuestion.type === 'vrai-faux' ? 'VRAI ou FAUX' : 'QCM'}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 leading-relaxed">
          {currentQuestion.question}
        </h3>
      </div>

      {/* Réponses */}
      <div className="space-y-3 mb-6">
        {currentQuestion.type === 'vrai-faux' ? (
          <>
            <button
              onClick={() => handleAnswerSelect(true)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-xl text-left font-semibold transition-all text-lg ${
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
              <span>✅ VRAI</span>
            </button>
            <button
              onClick={() => handleAnswerSelect(false)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-xl text-left font-semibold transition-all text-lg ${
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
              <span>❌ FAUX</span>
            </button>
          </>
        ) : (
          currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-xl text-left font-semibold transition-all text-lg ${
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
              <span>{option}</span>
            </button>
          ))
        )}
      </div>

      {/* Explication */}
      {showExplanation && (
        <div
          className={`p-4 rounded-2xl mb-4 flex items-start gap-3 ${
            isCorrect ? 'bg-green-50' : 'bg-orange-50'
          }`}
        >
          {isCorrect ? (
            <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
          ) : (
            <XCircle className="w-7 h-7 text-orange-600 flex-shrink-0 mt-1" />
          )}
          <div>
            <h4
              className={`font-bold text-lg mb-1 ${
                isCorrect ? 'text-green-900' : 'text-orange-900'
              }`}
            >
              {isCorrect ? 'Bonne réponse !' : 'Ce n’est pas tout à fait ça'}
            </h4>
            <p className="text-gray-700">{currentQuestion.explanation}</p>
          </div>
        </div>
      )}

      {/* Boutons */}
      <div className="flex gap-4">
        {!showExplanation ? (
          <button
            onClick={handleValidate}
            disabled={selectedAnswer === null}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${
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
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
          >
            {currentQuestionIndex < currentQuiz.questions.length - 1
              ? 'Question suivante →'
              : 'Voir les résultats 🎯'}
          </button>
        )}

        <button
          onClick={restartQuiz}
          className="px-4 py-3 rounded-xl font-bold text-sm text-gray-600 bg-gray-100 hover:bg-gray-200"
        >
          Réinitialiser ce quiz
        </button>
      </div>
    </div>
  );
};

export default GenericQuizPage;
