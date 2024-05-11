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

  return (
    <div>
      <div>
        <button onClick={() => setIsStep((c) => isStep - 1)}>-</button>
        <span>Step: {isStep}</span>
        <button onClick={() => setIsStep((c) => isStep + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setIsCount((c) => isCount - isStep)}>-</button>
        <span>Count: {isCount}</span>
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
    </div>
  );
}

export default App;
