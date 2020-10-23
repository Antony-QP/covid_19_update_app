import React, { Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './components/pages/About'
import News from './components/pages/News'
import Symptoms from './components/pages/Symptoms'
import CountryItem from './components/countries/Country_item'
import Search from './components/countries/Search'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    data :[],
    dataPresent : null
    // country: "Spain",
    // code: "ES",
    // confirmed: 1046641,
    // recovered: 196958,
    // critical: 1930,
    // deaths: 34366,
    // latitude: 40.463667,
    // longitude: -3.74922,
    // lastChange: "2020-10-21T19:00:55+02:00",
    // lastUpdate: "2020-10-22T11:00:05+02:00"
  }

  clearFormAndCountry = () => {
    this.hideResults()
    this.clearSearch()
  }

  showFormAndResults = () => {
    this.searchCountry()
    this.showResults()
  }

  showResults = () => {
    let results = document.querySelector('.country-item-div')
    results.style.display = 'block'
  }

  hideResults = () => {
    let results = document.querySelector('.country-item-div')
    results.style.display = 'none'
  }

// Get COVID data from the api
  searchCountry = async (text) => {
    const res = await axios.get(`https://covid19-api.com/country?name=${text}&format=json`)
      this.setState({data: res.data[0]})
      console.log(this.state.data)
  }

  clearSearch = (e) => {
    e.preventDefault()
    this.setState({ data : []})
    console.log("clearing")
    this.dataIsNotPresent();

  }
  
  dataIsPresent = () => {
    this.setState({ dataPresent : true})
  }

  dataIsNotPresent = () => {
    this.setState({ dataPresent : false})
  }

  render(){
  return (
    <Router>
<div>
<body>
    <Navbar/>
    <Switch>
  <main>
    <Route exact path='/'></Route>
    <Search searchCountry={this.searchCountry} showClear={this.state.dataPresent ? true : false} dataIsPresent={this.dataIsPresent} dataIsNotPresent={this.dataIsNotPresent} dataPresent={this.state.dataPresent} clearSearch={this.clearSearch} hideResults={this.hideResults} showResults={this.showResults} clearFormAndCountry={this.clearFormAndCountry} showFormAndResults={this.showFormAndResults}/>
  <CountryItem data={this.state.data} clearSearch={this.clearSearch} hideResults={this.hideResults} showResults={this.showResults} clearFormAndCountry={this.clearFormAndCountry} showFormAndResults={this.showFormAndResults}/>

  <Route exact path='/about' component={News} />
  <Route exact path='/symptoms' component={Symptoms}/>
  <Route exact path='/about' component={About}/>
  </main>
  </Switch>
    <Footer/>
  </body>
</div>

</Router>
  );
}
}

export default App;
