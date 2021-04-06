import React from 'react';
import countapi from 'countapi-js';

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
        this.setState({hits: result.value});
        console.log("show value");
      })
      .catch(error => {
        this.setState({
            error: true,
            errMsg: error
        });
        console.log("show error " + error);
      });
  }

  handleButtonClick() {
    countapi.hit('1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
      .then(result => {
        this.setState({hits: result.value});
      })
      .catch(error => {
        this.setState({
            error: true,
            errMsg: error
        });
      });
  }

  render() {
    const { hits, error, errMsg } = this.state;

    let countingDiv;
    if(error) {
        countingDiv = (
            <div>
                <div>An error occured</div>
                <div>{`Reason: ${errMsg}`}</div>
            </div>
        );

    } else {
        countingDiv = (
            <div>
                <button type='button' onClick={this.handleButtonClick} className=''>Click Me!</button>
                <div>{`Number of hits: ${hits}`}</div>
            </div>
       );
    }
    
    return (
      <>
        {countingDiv}
      </>
    );
  }
}

export default CountingComponent;