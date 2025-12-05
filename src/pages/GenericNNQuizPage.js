// src/pages/GenericNNQuizPage.js
import React from 'react';
import GenericQuizPage from './GenericQuizPage';
import { quizDatabaseNN } from '../data/quizDatabaseNN';

const GenericNNQuizPage = ({ topicKey }) => {
  // on transmet la base NN au composant générique
  return <GenericQuizPage topicKey={topicKey} database={quizDatabaseNN} />;
};

export default GenericNNQuizPage;
