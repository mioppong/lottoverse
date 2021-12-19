import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";

import Header from "./components/Header/Header";
import Total from "./components/TotalPotComponent/Total";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contestants from "./pages/Contestants/Contestants";

const App = (props) => {
  const params = useParams();
  const location = useLocation();
  const nav = useNavigate();
  const [url, setUrl] = useState(1);

  // console.log("PARAMS", params);
  useEffect(() => {
    getUrl();
  }, []);

  const getUrl = async () => {
    const { pathname } = location;
    switch (pathname) {
      case "/":
        nav("/home");
        setUrl(1);

        return;
      case "/home":
        nav("/home");
        setUrl(1);

        return;

      case "/contestants":
        nav("/contestants");
        setUrl(2);

        return;
      case "/about":
        nav("/about");
        setUrl(3);

        return;
      default:
        nav("/home");
        setUrl(1);
        return;
    }
  };

  const handleUrlChange = (value) => {
    switch (value) {
      case 1:
        nav("/home");
        setUrl(1);

        return;

      case 2:
        nav("/contestants");
        setUrl(2);

        return;
      case 3:
        nav("/about");
        setUrl(3);

        return;
      default:
        nav("/home");
        setUrl(1);
        return;
    }
  };
  return (
    <div style={{  padding: "1%" }}>
      <Header onMenuClick={(value) => handleUrlChange(value)} screen={url} />
      {url === 1 && <Home />}
      {url === 2 && <Contestants />}
      {url === 3 && <About />}
      <Particles options={require("./assets/confetti.json")} />
    </div>
  );
};

export default App;
