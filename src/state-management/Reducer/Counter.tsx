import { useReducer, useState } from 'react';
import counterReducer from './counterReducer';
import useCounter from './Store';

const Counter = () => {
  // const [value, dispatch] = useReducer(counterReducer, 0);
  const { count, increment, reset} = useCounter();

  return (
    <div>
      Counter ({count})
      <button
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
