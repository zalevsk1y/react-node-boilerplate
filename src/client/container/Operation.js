import React from "react";
import {connect} from 'react-redux';
import {makeTransaction} from '../../redux/actions';

export  class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: undefined, amount: 0 };
    this.changeOperationType=this.changeOperationType.bind(this);
   
    this.changeAmount=this.changeAmount.bind(this);
    this.makeTransaction=this.makeTransaction.bind(this);

  }

  changeOperationType(event) {
    console.log(event.target.id)
    this.setState({ type: event.target.value });
  }

  changeAmount(event) {
    this.setState({ amount: +event.target.value });
  }

  createId(){
      return Math.random()*1000000;
  }

  makeTransaction(event) {
    event.preventDefault();
    if(this.state.type==undefined) return;
    const id = this.createId();
    this.props.makeTransaction(id, this.state.type, this.state.amount);
  }

  render() {
    return (
      <div className="oprations">
        <label htmlFor="credit-opt">Credit</label>
        <input
          type="radio"
          value="credit"
          name="type"
          id="credit-opt"
          onChange={this.changeOperationType}
        ></input>
        <label htmlFor="debit-opt">Debit</label>
        <input
          type="radio"
          value="debit"
          name="type"
          id="debit-opt"
          onChange={this.changeOperationType}
        ></input>
        <input type="number" placeholder="0" onBlur={this.changeAmount}></input>
        <input type="button" value="submit" onClick={this.makeTransaction}></input>
      </div>
    );
  }
}

function mapStateToProps(state){
    const {transactions,isFetching}=state.transactions;
    return {
        transactions,
        isFetching
    };
  }
  function mapDispatchToProps(dispatch){
    return {
      makeTransaction:(id,type,amount)=>{
            dispatch(makeTransaction(dispatch,id,type,amount));
        },
        
    }
  }
  
  
  
  export default connect(null,mapDispatchToProps)(Operation); 