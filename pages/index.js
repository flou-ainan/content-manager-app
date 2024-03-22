
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

export default function Home() {
  return (
    <>
     <h1>Hello World</h1>
     <CompA />
    </>
  );
}
