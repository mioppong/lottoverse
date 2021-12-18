import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

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
        setUrl(1);
        return;
      case "/home":
        setUrl(1);
        return;

      case "/contestants":
        setUrl(2);
        return;
      case "/about":
        setUrl(3);
        return;
      default:
        nav("/home");
        return;
    }
  };

  return (
    <div style={{  }}>
      <Header />
      {url === 1 && <Home />}
      {url === 2 && <Contestants />}
      {url === 3 && <About />}
    </div>
  );
};

export default App;
