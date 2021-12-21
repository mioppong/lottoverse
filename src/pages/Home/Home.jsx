import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Lottie from "react-lottie";
import animation from "../../assets/animation_logo.json";
import Total from "../../components/TotalPotComponent/Total";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        padding: "5%",
        flex: 1,
        display: "flex",
        // backgroundColor: "red",
        // opacity: 0.5,
        justifyContent: "space-evenly",
      }}
    >
      <Box style={{ height: 500, width: 500 }}>
        <Lottie options={defaultOptions} height={300} width={300} style={{}} />
      </Box>
      <Paper style={{ height: 500, width: 500 }}>
        <Typography>Hello</Typography>
      </Paper>
    </div>
  );
};

export default Home;
