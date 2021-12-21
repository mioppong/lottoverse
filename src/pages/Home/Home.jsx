import React from "react";

import Total from "../../components/TotalPotComponent/Total";

const Home = () => {
  return (
    <div
      style={{
        padding: "1%",
        flex: 1,
        display: "flex",
        backgroundColor: "red",
        opacity: 0.5,
      }}
    >
      <Total />
    </div>
  );
};

export default Home;
