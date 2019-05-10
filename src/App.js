import React from "react";
import GetUsers from "./components/GetUsers";
import SearchBar from "./components/SearchBar";
import RenderUsers from "./components/RenderUsers";
function App() {

  function getInput (value) {
   console.log("sdsdsdbgfdcsdvgbngbdsff",value)
  }


  return (
    <div className="ui container">
      <SearchBar />
      <GetUsers getUserInput={getInput} />
    </div>
  );
}

export default App;
