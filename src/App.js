import "./styles.css";
import { useReducer } from "react";

const countReducer = (initialState = 0, action) => {
  if (action === "increment") {
    return initialState + 1;
  } else if (action === "decrement" && initialState > 0) {
    return initialState - 1;
  } else if (action === "reset") {
    return (initialState = 0);
  } else {
    return initialState;
  }
};
export default function App() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="App">
      <h1>React Counter With Reducer</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}
