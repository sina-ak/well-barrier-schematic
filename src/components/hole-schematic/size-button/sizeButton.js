import React from "react";
import "./sizeButton.css";

const SizeButton = (props) => {

    return (
        <button>  
            {props.children}
        </button>
    );
}

export default SizeButton;