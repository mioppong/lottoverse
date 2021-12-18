import React from "react";

import Header from "../../components/Header/Header";
import Total from "../../components/TotalPotComponent/Total";

const Home = () => {
  return (
    <div style={{ marginTop: 70, width: "100%", backgroundColor: "blue" }}>
      Home\\
      <div>HOME</div>
      <Total />
      <Total />
      <Total />
    </div>
  );
};

export default Home;
