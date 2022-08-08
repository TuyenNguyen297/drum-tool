import style from "../Slider/Slider.module.scss";
import { useEffect, useRef } from "react";
import { sliderProgressing, hideElement } from "./stylingSlider";
import { useDispatch, useSelector } from "react-redux";
import changeVolume from "../../redux/actions/changeVolume.js";

export default function Slider() {
  const { volume, power } = useSelector((state) => ({
    volume: state.volume.value,
    power: state.power.status,
  }));

  const dispatch = useDispatch();
  const element = useRef({});

  function handleProgress(e) {
    sliderProgressing(element.current);
    dispatch(changeVolume(e.target.value))
  }

  useEffect(() => {
    sliderProgressing(element.current);
    hideElement(element.current["indicator"]);
  }, []);


  return (
    <div className={style.slider}>
      <div id="progress-indicator" ref={(id) => { element.current["indicator"] = id }}>
        <span id="progress-value">{volume}</span>
        <span id="line"></span>
      </div>
      <input
        id="slider"
        type="range"
        min="0"
        max="100"
        ref={(id) => { element.current["slider"] = id }}
        onInput={handleProgress}
        onMouseUp={() => hideElement(element.current["indicator"])}
        disabled={!power}
      />
    </div>
  );
}
