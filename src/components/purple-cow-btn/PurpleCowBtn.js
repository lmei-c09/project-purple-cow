import React from 'react';
import purpleBtnStyles from './PurpleCowBtn.module.css';

const PurpleCowBtn = (props) => {
    const { name, type, onClick } = props;

    return (
        <button
            type={type}
            onClick={onClick}
            className={purpleBtnStyles.btnCss}>
            {name}
        </button>
    );
}

export default PurpleCowBtn;
