# use-measure

React hook for measuring elements.

## Install

```
npm install @darwish/use-measure-react

```

## Usage

```jsx
import React, { useState } from "react";
import useMeasure from "@darwish/use-measure-react";


function App() {
  const [ref, bounds: { width, height, top, left, bottom, right, x, y, scrollX, scrollY }] = useMeasure();
  return (  
    <div ref={ref}>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
      <p>Top: {top}</p>
      <p>Left: {left}</p>
      <p>Bottom: {bottom}</p>
      <p>Right: {right}</p>
      <p>X: {x}</p>
      <p>Y: {y}</p>
      <p>Scroll X: {scrollX}</p>
      <p>Scroll Y: {scrollY}</p>
    </div>
  );
}

```

## API

### useMeasure()

Returns a tuple containing a ref object and an object containing the measurements of the element.

- `ref`: A ref object that should be attached to the element you want to measure.
- `bounds`: An object containing the measurements of the element.
  - `width`: The width of the element.
  - `height`: The height of the element.
  - `top`: The top position of the element relative to the viewport.
  - `left`: The left position of the element relative to the viewport.
  - `bottom`: The bottom position of the element relative to the viewport.
  - `right`: The right position of the element relative to the viewport.
  - `x`: The horizontal center position of the element relative to the viewport.
  - `y`: The vertical center position of the element relative to the viewport.
  - `scrollX`: The horizontal scroll position of the viewport.
  - `scrollY`: The vertical scroll position of the viewport.


## License

MIT © [@LonelyFellas](https://github.com/LonelyFellas)

