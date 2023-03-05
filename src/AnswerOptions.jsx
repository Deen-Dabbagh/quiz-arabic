import React from 'react';
import PropTypes from 'prop-types';

const AnswerOptions = ({ answerOptions, onAnswerSelected }) => {
  const columns = 2; // Number of columns in the grid
  const rows = Math.ceil(answerOptions.length / columns); // Number of rows in the grid
  const gridTemplateColumns = `repeat(${columns}, 1fr)`;
  const gridTemplateRows = `repeat(${rows}, auto)`;

  return (
    <div
      className="answerOptions"
      style={{
        display: 'grid',
        gridTemplateColumns,
        gridTemplateRows,
        gap: '10px',
      }}
    >
      {answerOptions.map((answerOption, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => onAnswerSelected(index)}
          style={{ gridColumn: `span ${columns}`, gridRow: `span ${rows}` }}
        >
          {answerOption.content}
        </button>
      ))}
    </div>
  );
};

AnswerOptions.propTypes = {
  answerOptions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default AnswerOptions;
