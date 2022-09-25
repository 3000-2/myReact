/* @jsx createElement */
import { createElement, render } from "./react";

function Title(props) {
  console.log(props);
  return <h1 style={props.style}>{props.children}</h1>;
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}

const vDOM2 = (
  <p>
    <Title style="color:red">리스트</Title>
    <ul>
      <Item color={"blue"}>1</Item>
      <Item>2</Item>
      <Item>3</Item>
    </ul>
  </p>
);

render(vDOM2, document.getElementById("root"));
