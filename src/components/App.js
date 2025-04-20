import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  if (isDarkMode) {
    return (
      <div className="App dark">
        <h1>Welcome to the App</h1>
        <button onClick={handleToggle}>Light Mode</button>
        <ShoppingList items={itemData} />
      </div>
    );
  } else {
    return (
      <div className="App light">
        <h1>Welcome to the App</h1>
        <button onClick={handleToggle}>Dark Mode</button>
        <ShoppingList items={itemData} />
      </div>
    );
  }
}

export default App;
