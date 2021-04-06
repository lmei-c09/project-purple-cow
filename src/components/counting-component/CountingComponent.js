import React from 'react';
import countapi from 'countapi-js';
import checkResult from '../../functions/checkResult';
import PurpleCowBtn from '../purple-cow-btn/PurpleCowBtn';
import countCompStyles from './CountingComponent.module.css';

class CountingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: 0,
            countKey: this.props.countKey,
            error: false,
            errMsg: ''
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount() {
        const { countKey } = this.state;

        countapi.get(countKey)
            .then(result => {
                return checkResult(result);
            })
            .then(result => {
                this.setState({ hits: result.value });
            })
            .catch(error => {
                this.setState({
                    error: true,
                    errMsg: error
                });
            });
    }

    handleButtonClick() {
        const { countKey } = this.state;

        countapi.hit(countKey)
            .then(result => {
                return checkResult(result);
            })
            .then(result => {
                this.setState({ hits: result.value });
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
        if (error) {
            countingDiv = (
                <div className={countCompStyles.countingDiv}>
                    <div className={countCompStyles.errCss}>An error occured</div>
                    <div className={countCompStyles.errMsgCss}>{`Reason: ${errMsg}`}</div>
                </div>
            );

        } else {
            countingDiv = (
                <div className={countCompStyles.countingDiv}>
                    <PurpleCowBtn
                        name='Click Me!'
                        type='button'
                        onClick={this.handleButtonClick}
                    />
                    <div className={countCompStyles.numDisplay}>{`Number of hits: ${hits}`}</div>
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