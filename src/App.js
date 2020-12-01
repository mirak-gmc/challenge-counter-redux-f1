import React, { useState } from "react";
import { connect } from "react-redux";
import { inc, dec } from "./js/actions";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <button onClick={() => props.decrement(10)}>-</button>
      <span> {props.counter} </span>
      <button onClick={() => props.increment(5)}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (payload) => dispatch(inc(payload)),
    decrement: (payload) => dispatch(dec(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
