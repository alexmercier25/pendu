import React from "react";

class Status extends React.PureComponent {
  render() {
    return <h4>{this.props.message}</h4>;
  }
}

export default Status;
