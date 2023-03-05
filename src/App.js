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
    <div>
    <div>
      <button onClick={() => handleButtonClick("buttonOne")}>
        Arabic Quiz
      </button>
      <button onClick={() => handleButtonClick("buttonTwo")}>
        English Quiz
      </button>
    </div>
    <div dir={dir} className="app-container">
      

      {activeButton === "buttonOne" && <ButtonOne />}
      {activeButton === "buttonTwo" && <ButtonTwo />}
    </div></div>
  );
}

export default App;
