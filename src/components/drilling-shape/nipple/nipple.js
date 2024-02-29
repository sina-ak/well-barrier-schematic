import React from "react";

const Nipple = ({nipples, middleOfShapeX, middleOfShapeY, offsetY, totalDepth}) => {
    const width = 120;
    let lineMargin = 10;
    const sideLength = 120; // Length of each side of the octagon
    const cornerRadius = 20; // Radius of the rounded corners
    const halfSideLength = sideLength / 2+10;
    const halfCornerRadius = cornerRadius / 2+ 30;
    let drawPipes = [];

    nipples.forEach((depth, index) => {
        const calcSize = offsetY + depth;
        const calcRightRectWidth = 7 + (index * 7);
        const points = [
            middleOfShapeX - halfSideLength + cornerRadius, calcSize, // Top left corner
            middleOfShapeX + halfSideLength - cornerRadius, calcSize, // Top right corner
            middleOfShapeX + halfSideLength, calcSize + halfCornerRadius, // Right top corner
            middleOfShapeX + halfSideLength, calcSize + sideLength - halfCornerRadius, // Right bottom corner
            middleOfShapeX + halfSideLength - cornerRadius, calcSize + sideLength, // Bottom right corner
            middleOfShapeX - halfSideLength + cornerRadius, calcSize + sideLength, // Bottom left corner
            middleOfShapeX - halfSideLength, calcSize + sideLength - halfCornerRadius, // Left bottom corner
            middleOfShapeX - halfSideLength, calcSize + halfCornerRadius, // Left top corner
        ].join(',');

        const draw = (
            <React.Fragment  key={index}>

            <polygon points={points} rx="10" style={{ fill: '#afafaf', stroke: '#3d8ff4', strokeWidth: 3 }} />
            <rect x={middleOfShapeX + halfSideLength +3} y={calcSize + halfCornerRadius} width={calcRightRectWidth} height={ sideLength - (2*halfCornerRadius)} rx="2" fill="#8ebfff" stroke="#3d8ff4" strokeWidth="3" />
            <line x1={middleOfShapeX + halfSideLength+calcRightRectWidth +3} y1={offsetY} x2={middleOfShapeX + halfSideLength+calcRightRectWidth +3} y2={calcSize + halfCornerRadius + sideLength - (2*halfCornerRadius)} stroke="#3d8ff4" strokeWidth="3" />
            </React.Fragment>
        );
        drawPipes.push(draw);
    });

    return (
        <g xmlns="http://www.w3.org/2000/svg">
            {drawPipes}
        </g>
    );
}

export default Nipple;
