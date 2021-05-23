import React from "react";
import Btn from "../btn/btn";

import s from "./Interface.module.css";
export type InterfaceType={
    counter:number
    maxValue:number
    addNumber:()=>void
    resetCounter:()=>void
}

function Interface(props:InterfaceType) {
    return(  
    <div>
        <div className={props.counter === props.maxValue ?  s.InterfaceItemRed : s.InterfaceItem}>{props.counter}</div>
        <div><Btn counter={props.counter}  maxValue={props.maxValue} addNumber={props.addNumber} resetCounter={props.resetCounter} /></div>
    </div>)
}
export default Interface;