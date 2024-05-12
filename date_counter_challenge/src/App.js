import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [isStep, setIsStep] = useState(1);
  const [isCount, setIsCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + isCount);

  function handleStep(id) {
    setIsStep(id);
  }

  function handleCount(id) {
    setIsCount(id);
  }

  function handleReset() {
    setIsStep(1);
    setIsCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={isStep}
          onChange={(e) => handleStep(Number(e.target.value))}
        />
        <span>Step: {isStep}</span>
        {/* <button onClick={() => setIsStep((c) => isStep - 1)}>-</button>
        <span>Step: {isStep}</span>
        <button onClick={() => setIsStep((c) => isStep + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setIsCount((c) => isCount - isStep)}>-</button>
        <input
          type="text"
          value={isCount}
          onChange={(e) => handleCount(Number(e.target.value))}
        />
        {/* <span>Count: {isCount}</span> */}
        <button onClick={() => setIsCount((c) => isCount + isStep)}>+</button>
      </div>

      <p>
        <span>
          {isCount === 0
            ? "Today is "
            : isCount > 0
            ? `${isCount} days from today is `
            : `${Math.abs(isCount)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {isCount !== 0 || isStep !== 1 ? (
        <button onClick={() => handleReset()}>Reset</button>
      ) : null}
    </div>
  );
}

export default App;
