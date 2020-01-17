import React, {useState} from 'react';
import './App.css';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';

function App() {
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(null);
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [part, setPart] = useState(null);
  const [engine, setEngine] = useState(null);

  const fetchParts = async (e) => {
    setLoading(true);
    handleClick();
    e.preventDefault();
    await fetch('http://localhost:8000/scrapedata', {headers: {'Content-Type': 'application/json'}, method: "POST", body: JSON.stringify({make: make, year: year, model: model, part: part, engine: engine})})
    .then(res => {
      return res.json()
    }).then(json => {setResults(json); setLoading(false)});
  }

  const setMakeState = (make) => {
    setMake(make);
  }
  const setEngineState = (engine) => {
    setEngine(engine);
  }
  const setModelState = (model) => {
    setModel(model);
  }
  const setYearState = (year) => {
    setYear(year);
  }
  const setPartState = (part) => {
    setPart(part);
  }
  const handleClick = () => {
    setPage(page + 1);
  }
  if(page === 1){return <SecondSlide
     handleClick={handleClick}
      setMakeState={setMakeState}
      setModelState={setModelState}
      setYearState={setYearState}
      setPartState={setPartState}
      setEngineState={setEngineState}
      fetchParts = {fetchParts}
      />}
  if(page === 2) {return <ThirdSlide
    loading={loading}
    results={results}
    />}
  else return (
    <div className="starterPoint">
      <div className="form">
        <h1>Are you looking to find the cheapest car parts?</h1>
        <p><i>Well, look no further!</i></p>
          <button onClick={handleClick}>Let's go!</button>
      </div>
    </div>
  )
}
export default App;
