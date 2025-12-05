// src/pages/PerceptronQuizLesson.js
import React from 'react';
import GenericQuizPage from './GenericQuizPage';
import { quizDatabaseNN } from '../data/quizDatabaseNN';

const PerceptronQuizLesson = ({ index, total }) => {
  return <GenericQuizPage topicKey="perceptron" database={quizDatabaseNN} />;
};

export default PerceptronQuizLesson;
