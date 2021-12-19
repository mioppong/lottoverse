import { LoadingButton } from "@mui/lab";
import { AppBar, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  const nav = useNavigate();
  return (
    <AppBar
      position="sticky"
      style={{
        height: 70,
        borderRadius: 20,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        alignItems: "center",
        padding: "1%",
      }}
    >
      <div>
        <div style={{ height: 60, width: 60, backgroundColor: "red" }} />
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Button children="Home" onClick={() => onMenuClick(1)} />
        <Button children="Contestants" onClick={() => onMenuClick(2)} />
        <Button children="About" onClick={() => onMenuClick(3)} />
      </div>

      <LoadingButton
        style={{ marginLeft: "auto" }}
        variant="contained"
        children="Play"
      />
    </AppBar>
  );
};

export default Header;
