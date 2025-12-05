// src/pages/CNNQuizLesson.js
import React from 'react';
import GenericQuizPage from './GenericQuizPage';
import { quizDatabaseNN } from '../data/quizDatabaseNN';

const CNNQuizLesson = ({ index, total }) => {
  return <GenericQuizPage topicKey="cnn" database={quizDatabaseNN} />;
};

export default CNNQuizLesson;
