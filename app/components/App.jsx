import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
