import React, { Component } from "react";

class SearchBar extends Component {
state={
    value:""
}

onChangeInput = (event) => {
  this.setState({
      value:event.target.value
  })
}

  render() {

    console.log("this is the input", this.state.value)
    return (
      <div>
        <div className="ui form ">
          <div className="field">
            <label>SEARCH</label>
            <input type="text" value={this.state.value} onChange={this.onChangeInput}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
