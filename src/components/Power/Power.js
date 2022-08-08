import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import togglePower from "../../redux/actions/togglePower";
import style from "../Power/Power.module.scss";


export default function Power() {
  const status = useSelector((state) => state.power.status);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    console.log("Power: ", status ? "OFF" : "ON")
    dispatch(togglePower(!status))
  }, [dispatch, status])

  useEffect(() => {

  }, [])

  return (
    <div className={style.div}>
      <header className="title">POWER</header>
      <label className="switch">
        <input type="checkbox" className="checkbox" onClick={handleClick} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
