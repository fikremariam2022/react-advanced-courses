import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increase = () => {
    setValue(value + 1);
  };
  const decrease = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };

  const cIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={increase}>
          Increase
        </button>
        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>
        <button type="button" className="btn" onClick={decrease}>
          Decrease
        </button>
      </section>

      {/* complex increase */}
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={cIncrease}>
          C Increase
        </button>
        <button type="button" className="btn" onClick={reset}>
          c Reset
        </button>
        <button type="button" className="btn" onClick={decrease}>
          c Decrease
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
