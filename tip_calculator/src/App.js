import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(null);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <TipPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </TipPercentage>
      <TipPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </TipPercentage>

      {bill > 0 && (
        <>
          <TotalBill bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function TipPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function TotalBill({ bill, tip }) {
  return (
    <div>
      <h2>
        You pay {bill + tip} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
