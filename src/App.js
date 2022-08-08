import React from "react";
import "./index.scss";
import style from "./App.module.scss";
import Pads from "./components/Pads/Pads.js";
import Power from "./components/Power/Power.js";
import Display from "./components/Display/Display.js";
import Slider from "./components/Slider/Slider.js";
import Bank from "./components/Bank/Bank.js";

function App() {
  return (
    <section id="drum-machine" className={style.App}>
      <div id="pads-area">
        <Pads />
      </div>
      <div id="control-area">
        <Power />
        <Display />
        <Slider />
        <Bank />
      </div>
    </section>
  );
}

export default App;
