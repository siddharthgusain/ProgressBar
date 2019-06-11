import React from 'react';
import './FillColor.css';

const FillColor = (props)=>{
    
    if(props.percent >0 && props.percent<=20) 
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'red'}} />
    else if(props.percent >20 && props.percent <=40)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'blue'}} />    
    else if(props.percent > 40 && props.percent<=60)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'green'}} />
    else if(props.percent > 60 && props.percent<=80)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'pink'}} />
    else if(props.percent > 80 && props.percent<=100)
        return <div className="fill-color" style={{width: `${props.percent}%`,background:'brown'}} />
}

export default FillColor ;