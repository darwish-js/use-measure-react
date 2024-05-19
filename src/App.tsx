import "./App.css";
import useMeasure from "../lib/main";

function App() {
  const [ref, states] = useMeasure();

  console.log(states);
  return (
    <>
      <div ref={ref}></div>
    </>
  );
}

export default App;
