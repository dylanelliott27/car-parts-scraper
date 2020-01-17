import React, {useState} from 'react';
import './App.css';


function SecondSlide(props) {
  return (
    <div className="starterPoint">
      <div className="form">
        <h2>We need to know a bit about your vehicle.</h2>
        <form>
          <label htmlFor="make">Make:</label>
          <select onChange={e => props.setMakeState(e.target.value)} name="make">
            <option value="Honda">Honda</option>
            <option value="Acura">Acura</option>
            <option value="Pontiac">Pontiac</option>
            <option value="audi">MORE COMING SOON!</option>
          </select>
          <label htmlFor="model">Model:</label>
          <input onChange={e => props.setModelState(e.target.value)} name="Model"></input>
          <label htmlFor="year">Year:</label>
          <input onChange={(e) => props.setYearState(e.target.value)} name="year"></input>
          <label htmlFor="enginesize">Engine size?</label>
          <input onChange={e => props.setEngineState(e.target.value)} name="enginesize"></input>
          <label htmlFor="part">Which part are you looking for?</label>
          <input onChange={e => props.setPartState(e.target.value)} name="part"></input>
          <button onClick={e => props.fetchParts(e)}>Click</button>
        </form>
      </div>
    </div>
  )
}

export default SecondSlide;
