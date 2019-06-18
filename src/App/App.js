import React from 'react';

import './App.scss';

import goats from './goats';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
        <div>Goat Yoga</div>
        {/* <GoatCorral goats={goats}/> */}
      </div>
    );
  }
}

export default App;
