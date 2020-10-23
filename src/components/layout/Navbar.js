import React from 'react'
import {Link} from 'react-router-dom' 


export const Navbar = () => {
  return (
    <nav className= "red darken-2">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center"><i className="fas fa-globe"></i>COVID-19 UPDATER</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href='https://www.bbc.co.uk/news/coronavirus'>Covid-19 News</a></li>
        <li><a href='/https://111.nhs.uk/'>Symptoms</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar