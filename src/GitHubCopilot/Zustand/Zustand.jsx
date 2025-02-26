import React from "react";
import { useState } from "react";

const Zustand = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={(e) => {
            e.preventDefault();

            setState(state + 1);
          }}
          type="reset"
          className="bg-blue-300 py-2 px-4 my-6 mx-6 rounded"
        >
            Click me to increment the state : {state}
        </button>
      </div>
    </>
  );
};

export default Zustand;
