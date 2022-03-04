import "../styles/Ship4x.css";
import MarkOnShip from "./MarkOnShip";

export default function Ship4x({ state }) {
  return (
    <div className="ship4x">
      {state?.map((el, i) =>
        <MarkOnShip state={el} key={i} />
      )}
    </div>
  )
}
