import React from 'react'

const CountryItem = (props) => {


  return (
    <div className="container country-item-div">
      <h2>Spain</h2>
      <div className="grid-container">
        <div className="result-square confirmed">
          <h6>Confirmed Cases</h6>
          <p>{props.data.confirmed}</p>
        </div>
        <div className="result-square critical">
        <h6>Critical</h6>
        {props.data.critical}
        </div>
        <div className="result-square recovered">
        <h6>Recovered</h6>
        {props.data.recovered}
        </div>
        <div className="result-square deaths">
          <h6>Deaths</h6>
          {props.data.deaths}
        </div>
      </div>
    </div>
  )
}

export default CountryItem