import React, { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { themeContext } from "../../Context/Context";
import './Toggle.css'

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      {/* <Moon /> */}
      <BsFillMoonFill/>
      <BsFillSunFill/>
      
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;