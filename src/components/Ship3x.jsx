import '../styles/Ship3x.css'
import MarkOnShip from './MarkOnShip'

export default function Ship3x({ state }) {
  return (
    <div className='ship3x'>
      {state?.map((el, i) =>
         <MarkOnShip state={el} key={i}/>
      )}
    </div>
  )
}
