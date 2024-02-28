import React from "react";

const ExpansionJoint = ({depth, middleOfShapeX, calcWidth, offsetY}) => {
    const calcDepth = offsetY+depth;
    const topWidth = calcWidth + 40;
    const size = 30;
    const points = [
        middleOfShapeX - (topWidth/2) , calcDepth, // Top left corner
        middleOfShapeX + (topWidth/2), calcDepth, // Top right corner
        middleOfShapeX + (calcWidth/2), calcDepth + size, // Bottom right corner
        middleOfShapeX - (calcWidth/2) , calcDepth + size, // Bottom left corner
    ].join(',');
    return (
        <polygon points={points} style={{ fill: '#dd5037', stroke: '#000', strokeWidth: 5 }} />
    )
}
export default ExpansionJoint;