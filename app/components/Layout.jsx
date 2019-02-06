import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <section className="main-content">{this.props.children}</section>
      </div>
    );
  }
}

export default Layout;
