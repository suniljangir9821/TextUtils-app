import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextutilsForm from "./components/TextutilsForm";
// import About from "./Components/About";

import React from "react";
import Footer from "./components/Footer";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "rgb(0,92,102)";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        mode={mode}
        alert={alert}
        toggleMode={toggleMode}
        titleText={"TextUtils"}
        homeText={"Home"}
        aboutText={"About"}
      />
      <Alert alert={alert} />
      <TextutilsForm mode={mode} showAlert={showAlert} />
      {/* <About /> */}
      <Footer mode={mode} />
    </>
  );
}

export default App;
