import React from "react";
import { Discounts } from "../utils/api";

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      discounts: null
    };
  }

  componentDidMount() {
    Discounts.getDiscounts().then(response => {
      console.log(response);
      this.setState({
        discounts: response
      });
    });
  }
  render() {
    return (
      <div>
        {!this.state.discounts ? (
          "loading"
        ) : (
          <h1>Check out this discount! {this.state.discounts[0].Name}</h1>
        )}
      </div>
    );
  }
}

export default Home;
