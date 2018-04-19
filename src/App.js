import React, { Component } from 'react';

//import AlertBox from "./Components/AlertBox/AlertBox";
import Table from "./Components/Table/Table";
class App extends Component {
  render() {
    return (
       <Table
           firstHeading="FileName"
            secondHeading="Download Link"
       />
    );
  }
}

export default App;
