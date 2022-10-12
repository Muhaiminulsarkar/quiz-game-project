import React from 'react';
import './Option.css'

const Option = ({ option, correctChecker }) => {

  return (
    <div onClick={() => correctChecker(option)} className="Option">
      <p className='fw-bold'>{option}</p>
    </div>
  );
};

export default Option;