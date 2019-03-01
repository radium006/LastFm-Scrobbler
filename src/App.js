import React, { Component } from 'react';
import Linkfire from './components/linkfire'
import Lastfm from './components/lastfm'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Lastfm/>
          <Linkfire/>
      </div>
    );
  }
}

export default App;
