// import { Component } from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({type: "increment"});
  }

  const increase = () => {
    dispatch({type: "increase", payload: 5})
  }

  const decrementHandler = () => {
    dispatch({type: "decrement"});
  }

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increase}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//
//   increment () {
//     this.props.increment();
//   }
//
//   decrement () {
//     this.props.decrement();
//   }
//
//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.increment.bind(this)}>Increment</button>
//           <button onClick={this.decrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"}),
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);