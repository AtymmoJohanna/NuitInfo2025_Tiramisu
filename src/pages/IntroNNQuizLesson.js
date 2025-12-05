// src/pages/IntroNNQuizLesson.js
import React from 'react';
import GenericQuizPage from './GenericQuizPage';
import { quizDatabaseNN } from '../data/quizDatabaseNN';

const IntroNNQuizLesson = ({ index, total }) => {
  return <GenericQuizPage topicKey="introNN" database={quizDatabaseNN} />;
};

export default IntroNNQuizLesson;
