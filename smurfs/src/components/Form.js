import React, { useState } from "react";
import { connect } from "react-redux";
import { postData } from "../actions";
import axios from 'axios'


const Form = props => {


  const [data, setData] = useState({
    name: '',
    age: '',
    height: '',

  })
  const addSmurf = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', data)
        .then(res => console.log(res.data, ' posted to api'))
    setData({name: '', age: '', height: ''})

}

  const handleChange = e => {
    e.preventDefault();
    setData({
      ...data, [e.target.name]: e.target.value
    })
    console.log(data)
  }
  return (
<form className='form' onSubmit={addSmurf}>
                <div className='form-row'>
                  <label className="label">Name:</label>
                  <input className="input" name='name' onChange={handleChange}></input>
                </div>
                <div className='form-row'>
                  <label className="label">Age:</label>
                  <input className="input" name='age' onChange={handleChange}></input>
                </div>       
                <div className='form-row'>
                  <label className="label">Height:</label>
                  <input className="input" name='height' onChange={handleChange}></input>
                </div>
                  
                  <input type='submit' value="Add A Smurf" className='btn'></input>
            </form>)
}
const mapStateToProps = state => {
    return {};
  };
  export default connect(
    mapStateToProps,
    { postData }
  )(Form);