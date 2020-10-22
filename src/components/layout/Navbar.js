import React from 'react'


export const Navbar = () => {
  return (
    <nav className= "red darken-2">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center"><i className="fas fa-globe"></i>COVID-19 UPDATER</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Covid-19 News</a></li>
        <li><a href="badges.html">Symptoms</a></li>
        <li><a href="collapsible.html">Help</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar