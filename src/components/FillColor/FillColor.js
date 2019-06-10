import React from 'react';
import './FillColor.css';

const FillColor = (props)=>{
    
    if(props.percent === 20)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'red'}} />
    else if(props.percent === 40)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'blue'}} />    
    else if(props.percent === 60)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'green'}} />
    else if(props.percent === 80)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'pink'}} />
    else if(props.percent === 100)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'brown'}} />
}

export default FillColor ;