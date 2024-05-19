import React from "react";
import "./App.css";
import { Demo1 } from "./demo1";
import { Demo } from "./demo";

function App() {
  const [bool, setBool] = React.useState(false);
  console.log(bool);
  return (
    <div className="">
      <button onClick={() => setBool(!bool)}>toggle</button>
      <div
        style={{
          width: "700px",
          height: "700px",
          overflow: "auto",
          backgroundColor: "black",
        }}
      >
        <div style={{ height: "1000px", width: "1000px", overflow: "auto" }}>
          <div
            style={{
              margin: "80px 0 0 80px",
              height: "500px",
              width: "500px",
              backgroundColor: "black",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                overflow: "auto",
                backgroundColor: "gray",
              }}
            >
              <div
                style={{
                  width: "1000px",
                  height: "1000px",
                }}
              >
                {bool ? <Demo /> : <Demo1 />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
