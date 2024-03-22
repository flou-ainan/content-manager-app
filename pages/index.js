import React, {useState} from "react";

function CompA(){
  return (
    <>
      <h1>CompA</h1>
      <p>Hello Comp A</p>
    </>
  )
}

class CompC extends React.Component {
  render(){
   return <h1>Hello CompC</h1> 
  }
}

export default function Home() {
  const [count, setCount] = useState(10)

  const handleClick = op => setCount(x => op === "+" ? x+1 : x-1)
  return (
    <>
    <div className="counter">
      Count: <h2>{count}</h2>
      <button onClick={() => handleClick("-")}>-</button>
      <button onClick={() => handleClick("+")}>+</button>
    </div>
    <CompA />
    </>
  );
}
