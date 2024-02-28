import React from "react";

const TRSSV = ({depth, middleOfShapeX, calcWidth, offsetY}) => {

    return (
        <React.Fragment>
            <rect x={middleOfShapeX - (calcWidth / 2) - 5} y={offsetY + depth} width={calcWidth + 10} height={30} ry="5" fill="#ed6868" stroke="#000" strokeWidth="3" />
            <rect x={middleOfShapeX - ((calcWidth + 20) / 2)} y={offsetY + depth + 30} width={calcWidth + 20} height={70} rx="8" fill="#ed6868" stroke="#000" strokeWidth="3" />
            <rect x={middleOfShapeX - (calcWidth / 2) - 5} y={offsetY + depth + 100} width={calcWidth + 10} height={30} ry="5" fill="#ed6868 " stroke="#000" strokeWidth="3" />
        </React.Fragment>
    )
}
export default TRSSV;