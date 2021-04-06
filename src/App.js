import './App.module.css';
import React from 'react';
// import countapi from 'countapi-js';
import CountingComponent from './components/counting-component/CountingComponent';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hits: 0
//     };

//     // This binding is necessary to make `this` work in the callback
//     this.handleButtonClick = this.handleButtonClick.bind(this);
//   }

//   componentDidMount() {
//     countapi.get('/', '1ccb732e-b55a-4404-ad3f-0f99c02fe44e') //once component mounts, call the countapi to display the current key value
//       .then(result => { //used to check if an actual JSON result is returned and not null
//         if(result) {
//           return result;
//         } else {
//           throw new Error("An error occured");
//         }
//       })
//       .then(data => { //if result is returned then console print it
//         console.log(data);
//         this.setState({
//           hits: data.value
//         });
//       })
//       .catch(error => { //else if an error, console print error
//         console.log(error.message)
//       });
//   }

//   handleButtonClick() {
//     // countapi.get('1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
//     //   .then((result => {console.log(result.value)}));

//     countapi.hit('1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
//       .then(result => {
//         if(result.status === 200) {
//           return result;
//         } else {
//           throw new Error("An error occured");
//         }
//       })
//       .then(data => {
//         this.setState({hits: data.value});
//       })
//       .catch(error => {
//         console.log(error.message);
//       });
//   }

//   render() {
//     const { hits } = this.state;

//     //using string interpolation/ string template: `Let's meet at the ${foo}`
//     return (
//       <div>
//         <button 
//           type='button'
//           onClick={this.handleButtonClick}
//           className=''
//         >
//           Click Me!
//         </button>
//         <p>{`Number of hits: ${hits}`}</p>
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <CountingComponent countKey='1ccb732e-b55a-4404-ad3f-0f99c02fe44e' />
  );
}

export default App;
