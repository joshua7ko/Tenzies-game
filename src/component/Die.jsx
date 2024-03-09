import React from "react";
import ReactDOM  from "react-dom/client";

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#05F609" : "white"
    }
    return(

        <div   onClick={props.holdDice} 
               className="die-face"
               style={styles}
        >
            <h2 className="die-number">{props.value}</h2>
        </div>
    )

}