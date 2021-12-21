import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Modal, Paper } from "@mui/material";

import "./PlayButton.css";
const PlayComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const modalContainerStyle = {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  };

  const handleConnectWallet = () => {
    console.log("handle connect wallet");
  };
  return (
    <>
      <LoadingButton
        className="mainButton"
        style={{ marginLeft: "auto" }}
        variant="contained"
        children="Play"
        onClick={() => setModalVisible(true)}
        style={{
          height: 50,
          width: 120,
          color: "black",
          fontWeight: "bold",
        }}
      />
      <Modal open={modalVisible} onBackdropClick={() => setModalVisible(false)}>
        <div style={modalContainerStyle}>
          <Paper
            style={{
              height: "350px",
              width: "500px",
              marginTop: "15vh",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              overflow: "auto",
            }}
          >
            <LoadingButton
              style={{ marginLeft: "auto" }}
              variant="contained"
              children="Close"
              onClick={() => setModalVisible(false)}
            />
            <LoadingButton
              style={{ marginLeft: "auto" }}
              variant="contained"
              children="Connect Wallet"
              onClick={handleConnectWallet}
            />
          </Paper>
        </div>
      </Modal>
    </>
  );
};

export default PlayComponent;
