import { useSelector, useDispatch } from "react-redux";
import toggleBank from "../../redux/actions/toggleBank";
import style from "../Bank/Bank.module.scss";


export default function Bank() {
  const category = useSelector((state) => state.bank.category);
  const power = useSelector((state) => state.power.status);
  const dispatch = useDispatch();

  function handleClick() {
    console.log("Category No.:", category.categoryNo ? 0 : 1)
    dispatch(toggleBank(!category.categoryNo));
  }

  return (
    <div className={style.div}>
      <header className="title">BANK</header>
      <label className="switch">
        <input type="checkbox" className="checkbox" onClick={handleClick} disabled={!power} />
        <span className="slider" ></span>
      </label>
    </div>
  );
}
