/* @jsx createElement */
import { createElement, render } from "./react";

const vDOM2 = (
  <p>
    <h1 style="color:red">리스트</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </p>
);

render(vDOM2, document.getElementById("root"));
