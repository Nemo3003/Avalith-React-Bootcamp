
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount} from './store/slices/counter/counterSlice'
import './App.css'

function App() {
  const {value} = useSelector( (state:any) => state.counter);

  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2>count is {value}</h2>
      <button
      onClick={()=>{
        dispatch(increment())}}>+</button>
      <button
      onClick={()=>{
        dispatch(decrement())
      }
      } >-</button>
      <button
      onClick={()=>{
        dispatch(incrementByAmount(5))}}>+5</button>
      <button
      onClick={()=>{
        dispatch(incrementByAmount(-5))} }>-5 </button>
  
    </div>
  );
}

  
export default App
