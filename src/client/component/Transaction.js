import React from "react";


export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="transaction-container">
        <div>Transaction id:{this.props.param.id}</div>
        <span>type:{this.props.param.type}</span>
        <span>amount:{this.props.param.amount}</span>
        <hr></hr>
    </div>);

  }
}
