import React from "react";

const SizeButton = ({size,index,middleOfShapeX}) => {

    const pointY = 200 + (index * 270);
    const pointX = 2 * middleOfShapeX - 500 ;
    return (
        <g>
            <rect x={pointX} y={pointY} width="800" height="200" rx={100} fill="#1c1c1c" stroke="white" strokeWidth="1" />
            <text x={pointX+80} y={pointY + 140} fontSize="90" stroke="white" strokeWidth="5">
                    {size}" Hole Section
            </text>
        </g>
    );
}

export default SizeButton;