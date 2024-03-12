import React from "react";

const DepthIndicator = ({depth}) =>{
    return(
        <line x1="170" y1={depth} x2="500" y2={depth} stroke-dasharray="20,10" stroke="white" stroke-width="5" />
    );
} 

export default DepthIndicator;