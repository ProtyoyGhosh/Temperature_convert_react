import React from "react";
import { convert, toCelcius, toFarenhite } from "../lib/Convert";
import TemparetureInput from "./TemparetureInput";
import BoilingVerdict from "./BoilingVerdict";


export default class Temperature extends React.Component{
    state={
        tempareture:'',
        scale:'c',
    }
    handleChange=(e,scale)=>{
        this.setState({
            tempareture:e.target.value,
            scale,
        });
    };
    
    render(){
        const{tempareture,scale}=this.state;
        const celsius = scale === 'f' ? convert(tempareture,toCelcius):tempareture;
        const farenhite = scale === 'c' ? convert(tempareture,toFarenhite):tempareture;
        return(
            <>
            <TemparetureInput scale="c" tempareture={celsius} onTemparetureChange={this.handleChange}></TemparetureInput>
            <TemparetureInput scale="f" tempareture={farenhite} onTemparetureChange={this.handleChange}></TemparetureInput>
            <BoilingVerdict celcius={parseFloat (tempareture)}></BoilingVerdict>
            </>
        )
    }
}