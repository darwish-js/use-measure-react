import { useState } from "react";
import useMeasure from "react-use-measure";
import { Item } from "./item";

export function Demo1() {
  const [
    ref,
    { width, height, top, left, bottom, right, x, y, scrollX = 0, scrollY = 0 },
  ] = useMeasure({ scroll: true });
  const [bool, setBool] = useState(false);

  return (
    <div
      ref={ref}
      onClick={() => setBool(!bool)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: bool ? "450px" : "400px",
        height: bool ? "450px" : "400px",
        backgroundColor: "red",
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
        borderRadius: "10px",
        color: "white",
        padding: "5rem",
        boxSizing: "border-box",
        fontSize: "1.5rem",
        margin: "50px 0 0 50px",
      }}
    >
      <span>react-useMeasure</span>
      <Item label="width" value={width} />
      <Item label="height" value={height} />
      <Item label="top" value={top} />
      <Item label="left" value={left} />
      <Item label="bottom" value={bottom} />
      <Item label="right" value={right} />
      <Item label="x" value={x} />
      <Item label="y" value={y} />
      <Item label="scrollX" value={scrollX} />
      <Item label="scrollY" value={scrollY} />
    </div>
  );
}
