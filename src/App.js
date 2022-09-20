import "./styles.css";
import Child from "./Child";
import SuperChild from "./SuperChild";
import React, { useState } from "react";
//create contexthook here
export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("red");
  const [theme2, setTheme2] = useState("red");
  const [currentday, setCurrentday] = useState();

  function day(dayname) {
    setCurrentday(dayname);
  }

  return (
    //context hook apply on app
    //we have option to initialize the value direct.
    // <ThemeContext.Provider value={theme}>
    //WE can also pass multiple value
    //  <ThemeContext.Provider value={{Apptheme:theme,Apptheme1:theme2}}>
    <ThemeContext.Provider value={{ Apptheme: theme, getday: day }}>
      <div className="App">
        <h1>App Component</h1>
        <h1>Day {currentday}</h1>
        <Child />
        <SuperChild />
      </div>
    </ThemeContext.Provider>
  );
}
