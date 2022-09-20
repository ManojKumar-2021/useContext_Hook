import React, { useContext } from "react";
//import themecontext (context hook)
import { ThemeContext } from "./App";
function Child() {
  //assign the value of context in theme
  //const theme = useContext(ThemeContext);
  const { Apptheme } = useContext(ThemeContext);
  return (
    <>
      {/* apply the theme value on h1 */}
      {/* <h1 style={{ color:theme }}>Child Component</h1> */}
      <h1 style={{ color: Apptheme }}>Child Component</h1>
    </>
  );
}
export default Child;
