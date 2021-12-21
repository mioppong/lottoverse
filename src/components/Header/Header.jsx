import { AppBar, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Icons/Logo";

import PlayComponent from "../PlayComponent/PlayComponent";

const Header = ({ onMenuClick }) => {
  const nav = useNavigate();
  return (
    <AppBar
      position="sticky"
      style={{
        height: 70,
        // borderRadius: 20,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        alignItems: "center",
        padding: "1%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          children="Home"
          onClick={() => onMenuClick(1)}
          style={{
            backgroundColor: "#FFD321",
            color: "black",
          }}
        />
        <Button
          children="Contestants"
          onClick={() => onMenuClick(2)}
          style={{
            backgroundColor: "#FFD321",
            color: "black",

            marginLeft: 10,
            marginRight: 10,
          }}
        />
        <Button
          children="About"
          onClick={() => onMenuClick(3)}
          style={{
            backgroundColor: "#FFD321",
            color: "black",
          }}
        />
      </div>

      <PlayComponent />
    </AppBar>
  );
};

export default Header;
