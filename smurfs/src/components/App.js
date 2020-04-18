import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import Form from './Form'

const App = props => {
  useEffect(() => {
    props.fetchData()
  }, [])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
          <h2>Add A Smurf</h2>
          <div>
            <Form />
          </div>
          <h2>Smurfs List</h2>
          <div>
              {props.isLoading ? (
                <div>Loading Smurfs</div>
              ) : (
                <div>
            <table className="center">
            <thead />
              <th>Smurf Name</th>
              <th>Smurf Age</th>
              <th>Smurf Height</th>
              <th>Smurf ID</th>

            <tbody>
              {props.smurfs.map(dd => {
                return (
                  <tr>
                    <td>{dd.name}</td>
                    <td>{dd.age}</td>
                    <td>{dd.height}</td>
                    <td>{dd.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
                </div>
              )}
          </div>

        </div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(App);
