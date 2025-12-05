// src/pages/RecognitionQuizLesson.js
import React from 'react';
import GenericQuizPage from './GenericQuizPage';
import { quizDatabaseNN } from '../data/quizDatabaseNN';

const RecognitionQuizLesson = ({ index, total }) => {
  return <GenericQuizPage topicKey="recognition" database={quizDatabaseNN} />;
};

export default RecognitionQuizLesson;
