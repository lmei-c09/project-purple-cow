import './App.css';
import React from 'react';
import countapi from 'countapi-js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {

    countapi.visits().then((result) => {
      console.log(result.value);
    });

    return (
      <div>
        <button type="button" onClick="">Hit Me!</button>
        <p>Current number of hits: </p>
      </div>
    );
  }
}
export default App;
