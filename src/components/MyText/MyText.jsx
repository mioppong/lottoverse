import React from "react";
import "./MyText.css";
function MyText({ text, styles }) {
  return (
    <div className="text" style={styles}>
      {text}
    </div>
  );
}

export default MyText;
