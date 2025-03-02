// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count); // 상태 가져오기
  const dispatch = useDispatch(); // 디스패치 함수 가져오기

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={count === 0}
      >
        DECREMENT
      </button>
    </div>
  );
};
export default Counter;
