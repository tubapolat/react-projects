import {useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, increaseByAmount } from "../redux/counter/counterSlice";

function Counter() {
    const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{countValue}</h1>

      <button onClick={() => dispatch(increase())}>Incraese</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>

      <br/>
      <br/>
      <input type="number" value={amount} onChange={(e)=> setAmount (e.target.value)}></input>
      <button onClick={()=> dispatch (increaseByAmount(amount))}>Increase by amount</button>
    </div>
  );
}

export default Counter;
