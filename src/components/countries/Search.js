import React, { Component } from 'react'

export class Search extends Component {

  state = {
    text : ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === ''){
      console.log("Error")
    }else{
      this.props.searchCountry(this.state.text)
      this.setState({ text : ''})
    }
  }

  onChange = (e) => {
    this.setState({ text : e.target.value})
  }

  render() {
    return (
      <div class="row search-container">
      <form className="search-bar" onSubmit={this.onSubmit}>
          <div class="input-field col s12">
            <input id="search" type="text" class="validate" placeholder="Please enter country name" value={this.state.text} onChange={this.onChange}/>
          </div>
          <button className="btn waves-effect waves-light red darken-2" type="submit" name="action">Search
    <i className="material-icons right"></i>
  </button>
      </form>
    </div>
    )
  }
}

export default Search
