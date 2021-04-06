import React from 'react';
import countapi from 'countapi-js';
import checkResult from '../functions/checkResult';

class CountingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: 0,
      error: false,
      errMsg: ''
    };
  
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    countapi.get('1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
      .then(result => {
        return checkResult(result);
      })
      .then(data => {
        this.setState({hits: data.value});
      })
      .catch(error => {
        this.setState({
            error: true,
            errMsg: error.message
        });
      });
  }

  handleButtonClick() {
    countapi.hit('1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
      .then(result => {
        return checkResult(result);
      })
      .then(data => {
        this.setState({hits: data.value});
      })
      .catch(error => {
        this.setState({
            error: true,
            errMsg: error.message
        });
      });
  }

  render() {
    const { hits } = this.state;
    
    return (
      <div>
        <button 
          type='button'
          onClick={this.handleButtonClick}
          className=''
        >
          Click Me!
        </button>
        <div>{`Number of hits: ${hits}`}</div>
      </div>
    );
  }
}

export default CountingComponent;