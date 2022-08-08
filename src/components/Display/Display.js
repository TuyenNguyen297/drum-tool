import style from "../Display/Display.module.scss";
import { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Display() {
  const { category, volume, power, pad } = useSelector((state) => ({
    category: state.bank.category,
    volume: state.volume.value,
    power: state.power.status,
    pad: state.pad.pad,
  }));
  const ref = useRef([{ category }, { volume }, { power }, { pad }]);
  const [state, setState] = useState("");

  function fadeOutAfter(time) {
    setTimeout(() => {
      setState("");
    }, time);
  }

  const formatDisplayedData = useCallback((state = []) => {
    switch (Object.keys(state)[0]) {
      case 'power': {
        setState("POWER ".concat(power ? "ON" : "OFF"));
        fadeOutAfter(1000);
        break;
      }
      case 'category': {
        setState(category.categoryTitle);
        break;
      }
      case 'volume': {
        setState(`VOLUME: ${volume}`);
        fadeOutAfter(1000);
        break;
      }
      case 'pad': {
        setState(category[pad].title)
        break;
      }
      default:
        setState("");
    }
  }, [category, pad, power, volume]);

  useEffect(() => {
    let differ = []
      .concat({ category }, { volume }, { power }, { pad })
      .filter((e, index) => {
        let flag = false;
        if (Object.values(e)[0] !== Object.values(ref.current[index])[0]) {
          ref.current[index] = e;
          flag = true;
        } else flag = false;
        return flag;
      });
    formatDisplayedData(...differ);
  }, [power, volume, category, pad, formatDisplayedData]);

  return (
    <div id="display" className={style.div}>
      <p>{state}</p>
    </div>
  );
}
