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

  return (
    <>
     <h1>Hello World</h1>
     <CompA />
    <div className="counter">
      Count: {count}
    </div>
    </>
  );
}
