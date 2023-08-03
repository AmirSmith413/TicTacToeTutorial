import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Board from "./components/Board";
import NextBoard from './components/NextBoard'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Board/>
    <NextBoard/>
    </>
   
  );
}

export default App;
