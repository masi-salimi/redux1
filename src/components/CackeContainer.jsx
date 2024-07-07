import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCacke } from "../features/cacke/cackeSlice";
 

function CackeContainer() {
  const [value, setValue] = useState(0);
  //1. this hook accepts a function as its parameter:selecto function
  //2. useSelector hook return whatever returns by selectore function
  const state = useSelector((state) => state.cacke);
 
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cacke Number : {state.numOfCackes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <button onClick={() => dispatch({ type: "BUY_CAKE", payload: value })}> */}
      <button onClick={() => dispatch(buyCacke(value) )}>
        Buy Cacke
      </button>
    </div>
  );
}

export default CackeContainer;

//1. how to dispatch actions
//2. how to access to redux store
