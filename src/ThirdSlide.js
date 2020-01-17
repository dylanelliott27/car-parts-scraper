import React, {useState} from 'react';
import './App.css';


function ThirdSlide(props) {
  if(props.loading){return <div>loading</div>}
  if(!props.loading) return (
    <div className="starterPoint">
      <div className="form">
        <h2>Third component</h2>
        {props.results.map(res => {
            return(
                <>
                    <p key={Math.random()}>name: {res.brand}</p>
                    <p>name: {res.price}</p>
                </>
            )
        })}
      </div>
    </div>
  )
}

export default ThirdSlide;
