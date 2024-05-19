import { useState } from "react";
import useMeasure from "../lib/main";
import { Item } from "./item";

export function Demo() {
  const [
    ref,
    { width, height, top, left, bottom, right, x, y, scrollX, scrollY },
  ] = useMeasure<HTMLDivElement>({ scroll: true, resize: true, hover: true });
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
      <span>my-useMeasure</span>
      <Item label="width" value={width} />
      <Item label="height" value={height} />
      <Item label="top" value={top} />
      <Item label="left" value={left} />
      <Item label="bottom" value={bottom} />
      <Item label="right" value={right} />
      <Item label="x" value={x} />
      <Item label="y" value={y} />
      <Item label="scrollX" value={scrollX || 0} />
      <Item label="scrollY" value={scrollY || 0} />
    </div>
  );
}
