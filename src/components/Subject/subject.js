import React, { useState } from 'react'
import './Subject.css'

export const Subject = () => {

  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"))
  };


  return (
    <div className="wrapper" id={theme}>
      <div className="toggle-container">
        <p className="change-text">Click here</p>
        <input onChange={switchTheme} type="checkbox" id="toggle-btn" />
        <label htmlFor="toggle-btn" className="toggle-label"></label>
      </div>
    </div>
  )
}
