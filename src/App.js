import React, { useState } from "react";
import ButtonOne from "./App-ar";
import ButtonTwo from "./App-en";
import "./App.css";

function App() {
  const [activeButton, setActiveButton] = useState("buttonTwo");
  const [dir, setDir] = useState("ltr");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setDir((prevDir) => (prevDir === "ltr" ? "rtl" : "ltr"));
  };

  return (
    <div dir={dir} className="app-container">
      <button onClick={() => handleButtonClick("buttonOne")}>
        Arabic Quiz
      </button>
      <button onClick={() => handleButtonClick("buttonTwo")}>
        English Quiz
      </button>

      {activeButton === "buttonOne" && <ButtonOne />}
      {activeButton === "buttonTwo" && <ButtonTwo />}
    </div>
  );
}

export default App;
