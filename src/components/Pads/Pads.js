import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import clickOnPad from "../../redux/actions/clickOnPad.js";
import style from "./Pads.module.scss";

function waitFor(ref) {
  if (!ref) {
    setTimeout(waitFor, 0, ref);
  } else {
    return ref.id;
  }
}

export default function Pads() {
  const padList = "WQEASDZXC";
  const { category, volume, power } = useSelector((state) => ({
    category: state.bank.category,
    volume: state.volume.value,
    power: state.power.status,
  }));

  const dispatch = useDispatch();
  const audioSource = useRef({});
  const padRef = useRef({});

  const handleClick = useCallback(
    (e) => {
      if (power) {
        audioSource.current[e.target.textContent].load();
        audioSource.current[e.target.textContent].play();
        dispatch(clickOnPad(e.target.textContent));
      }
    },
    [dispatch, power]
  );

  const handleKeydown = useCallback((e) => {
    const keydownStyle = power ?
      ` background-color: rgb(171, 211, 71);
        transform: scale(0.95) translateY(2px);
        box-shadow: 0px 1px 5px 0px rgb(19, 19, 19);
        transition: background-color 0.1s;
      `
      :
      ` transform: scale(0.95) translateY(2px);
        box-shadow: 0px 1px 5px 0px rgb(19, 19, 19);
        transition: background-color 0.1s;
      `;

    const key = e.key.toUpperCase();
    if (padList.indexOf(key) !== -1) {
      padRef.current[key].click();
      padRef.current[key].style.cssText = keydownStyle;
    }
  }, [power]);

  const handleKeyup = useCallback((e) => {
    const keyupStyle =
      `
        background-color: #777;
        transform: scale(1) translateY(0px);
        box-shadow: 4px 4px 10px 0px rgb(57, 55, 55);
      `
    const key = e.key.toUpperCase();
    if (padList.indexOf(key) !== -1) {
      padRef.current[key].style.cssText = keyupStyle;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
    padList
      .split("")
      .map((id) => (audioSource.current[id].volume = volume / 100));
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeydown, handleKeyup, volume]);

  return (
    <div className={style.div}>
      {padList.split("").map((pad, index) => (
        <button
          key={index}
          // id={`${style[power ? "power-on" : "power-off"]}`}
          // ${style[power ? "power-on" : "power-off"]}
          id={category[pad].title.replace(/\s/g, "-")}
          className={"drum-pad ".concat(`${style[power ? "power-on" : "power-off"]}`)}
          onClick={handleClick}
          ref={(ref) => (padRef.current[pad] = ref)}>{pad}
          <audio
            id={pad}
            className="clip"
            ref={(ref) => (audioSource.current[waitFor(ref)] = ref)}
            src={category[pad].src} >
            {/* type="audio/mpeg" */}
          </audio>
        </button>
      ))}
    </div>
  );
}
