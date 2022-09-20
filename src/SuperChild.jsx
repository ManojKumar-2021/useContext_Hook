import React, { useContext } from "react";
//import themecontext (context hook)
import { ThemeContext } from "./App";
function SuperChild() {
  //assign the value of context in theme
  const { Apptheme, getday } = useContext(ThemeContext);
  var dayvalue = "Monday";

  function sendData() {
    getday(dayvalue);
  }
  return (
    <>
      {/* apply the theme value on h1 */}
      <h1 style={{ color: Apptheme }}>Super Child Component</h1>
      <button onClick={sendData}>Send day to App component</button>
    </>
  );
}
export default SuperChild;
