import '../styles/Ship2x.css'
import MarkOnShip from './MarkOnShip'

export default function Ship2x({ state }) {
  return (
    <div className="ship2x">
      {state?.map((el, i) =>
          <MarkOnShip state={el} key={i}/>
      )}
    </div>
  )
}
