import { useState, useEffect } from "react";
function Hello() {
  // Below two useEffect function do same thing!!
  useEffect(function () {
    console.log("hi :) ");
    return function () {
      console.log("bye :( ");
    };
  }, []);
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :( ");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
