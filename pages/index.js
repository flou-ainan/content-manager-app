import React from "react";

function CompA(){
  return (
    <>
      <h1>CompA</h1>
      <p>Hello Comp A</p>
      <CompB />
    </>
  )
          
}
function CompB(){
  return (
    <>
      <h1>CompB</h1>
      <p>Hello Comp A</p>
    </>
  )
}

class CompC extends React.Component {
  render(){
   return <h1>CompC</h1> 
  }
}

export default function Home() {
  return (
    <>
     <h1>Hello World</h1>
     <CompA />
     <CompC />
    </>
  );
}
