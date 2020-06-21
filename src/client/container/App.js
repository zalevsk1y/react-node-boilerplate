import React from 'react';
import Transaction from '../component/Transaction';
import Operation from './Operation';
import {fetchTransactions,fetchBalance} from '../../redux/actions';
import {connect} from 'react-redux';

export class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchTransactions();
    this.props.fetchBalance();
  }
  render() {
    return (
      <div>
         <span>Balance:{this.props.balance}</span><Operation />
        {this.props.transactions.map((trans,index)=><Transaction param={trans} key={index.toString()} />)}

       
      </div>
      
    );
  }
}

App.defaultProps={transactions:[],isFetching:false};

function mapStateToProps(state){
  const {transactions,isFetching,balance}=state;
  return {
      transactions:Array.isArray(transactions)?transactions:[],
      isFetching,
      balance
  };
}
function mapDispatchToProps(dispatch){
  return {
    fetchTransactions:()=>{
          dispatch(fetchTransactions(dispatch));
      },
      fetchBalance:()=>{
        dispatch(fetchBalance(dispatch))
      }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App); 