import React, { useState } from "react";

function App() {
  const [headerText, setHeaderText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  return (
    <div className="container">
      <h1>{headerText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={() => setHeaderText("Submit")}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
