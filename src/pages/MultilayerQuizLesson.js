// src/pages/MultilayerQuizLesson.js
import React from 'react';
import GenericQuizPage from './GenericQuizPage';
import { quizDatabaseNN } from '../data/quizDatabaseNN';

const MultilayerQuizLesson = ({ index, total }) => {
  return <GenericQuizPage topicKey="multilayer" database={quizDatabaseNN} />;
};

export default MultilayerQuizLesson;
