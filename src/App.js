import React, { Component} from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CountryItem from './components/countries/Country_item'
import Search from './components/countries/Search'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    data :[]
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


// Get COVID data from the api
  searchCountry = async (text) => {
    const res = await axios.get(`https://covid19-api.com/country?name=${text}&format=json`)
      this.setState({data: res.data[0]})
      console.log(this.state.data)
  }


  render(){
  return (
<div>
<body>
    <Navbar/>
  <main>
    <Search searchCountry={this.searchCountry}/>
  <CountryItem data={this.state.data}/>
  </main>
    <Footer/>
  </body>
</div>
  );
}
}

export default App;
