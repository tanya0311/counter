import React from "react";
import s from "./btn.module.css";

export type BtnPropsType= {
    counter:number
    addNumber:()=>void
    resetCounter:()=>void
}

function Btn( props:BtnPropsType) {

    return(
        <div className={s.btnItem}>
            <h3>значение</h3>
            <button onClick={ props.addNumber } disabled={props.counter===5}>inc</button>
            <button onClick={ props.resetCounter}  disabled={props.counter===0}>recert</button>
        </div>

    )
}


export default Btn;