import React from "react"

export default function Navbar() {
  return (
    <nav style={navStyle}>
        <div> <h2>Major Odyssey</h2></div>
        <button style={buttonStyle}>Home</button>
        <button style={buttonStyle}>Simulations</button>
        <button style={buttonStyle}>Odyssey AI</button>
        <button style={buttonStyle}>Contact</button>
    </nav>
  )
}

// Inline styles
const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around", // space between buttons
  alignItems: "center",
  height: "60px",
  backgroundColor: "#333",
  color: "white",
  position: "fixed", // always on top
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
  
}

