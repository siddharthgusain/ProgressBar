import React from 'react';
import FillColor from '../FillColor/FillColor';
import './ProgressBar.css';

const ProgressBar = (props)=>{
    return (
        <div className="progress-bar">
            <FillColor percent={ props.percent }/>
        </div>
    );
}

export default ProgressBar;