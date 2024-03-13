import React from "react";

const DepthIndicator = ({depth,label}) =>{
    const actDepth = depth+30;
    const startX = 550;
    const endX = 1500;
    return(
        <g>
            <text x={startX + (endX-startX)/2} y={actDepth - 20} fontSize="72" fill="white" stroke="white" strokeWidth="3">
                    {Math.round(label)}  ft
            </text>
            <line x1={startX} y1={actDepth} x2={endX} y2={actDepth} strokeDasharray="20,10" stroke="white" strokeWidth="5" />
        </g>
    );
} 

export default DepthIndicator;