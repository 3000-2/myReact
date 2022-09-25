/* @jsx createElement */
import { Component, createElement, render } from "./react";

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

// function Title(props) {
//   console.log(props);
//   return <h1 style={props.style}>{props.children}</h1>;
// }

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}

const App = () => (
  <p>
    <Title style="color:red">리스트 클래스</Title>
    <ul>
      <Item color={"blue"}>1</Item>
      <Item>2</Item>
      <Item>3</Item>
    </ul>
  </p>
);

render(<App />, document.getElementById("root"));
