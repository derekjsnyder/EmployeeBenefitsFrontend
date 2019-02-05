import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Layout />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));