import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PetsParentContainer from './container/PetsParentContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <PetsParentContainer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
