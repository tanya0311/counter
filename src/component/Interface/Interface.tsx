import React from "react";

import s from "./Interface.module.css";
export type InterfaceType={
    counter:number 
}

function Interface(props:InterfaceType) {
    return(  <div className={props.counter ===5?  s.InterfaceItemRed : s.InterfaceItem}>{props.counter}</div>
    )
}
export default Interface;