import React, { useEffect } from "react";
import { useRef } from "react";

const HookRef = () => {
  const inputref = useRef(null);
  useEffect(() => {
    //Focus the input value
    // inputref.current.focus();
  }, []);

  const focusInput = () => {
    inputref.current.focus();
  };
  return (
    <div>
      <input ref={inputref} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default HookRef;
