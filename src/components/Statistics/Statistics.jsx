import React from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback count: {total}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};
