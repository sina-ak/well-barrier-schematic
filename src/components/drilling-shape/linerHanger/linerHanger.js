import React from "react";

const LinerHanger = ({depth, middleOfShapeX, offsetY, tubingOffset} ) => {
    const hangerWidth = 40;
    const hangerHeight = 80;
    const fistOfShapeY = offsetY+ depth;
    const endOfShapeY = fistOfShapeY+ hangerHeight;
    const leftX = middleOfShapeX - (tubingOffset/2) - hangerWidth;
    const rightX = middleOfShapeX + (tubingOffset/2);

    return(
        <React.Fragment>
            <rect x={leftX} y={fistOfShapeY} width={hangerWidth } height={hangerHeight} fill="none" stroke="#000" strokeWidth="3" />
            <line x1={leftX} y1={fistOfShapeY} x2={leftX + hangerWidth} y2={endOfShapeY} stroke="#000" strokeWidth="4" />
            <line x1={leftX + hangerWidth} y1={fistOfShapeY} x2={leftX} y2={endOfShapeY} stroke="#000" strokeWidth="4" />


            <rect x={rightX } y={fistOfShapeY} width={hangerWidth } height={hangerHeight} fill="none" stroke="#000" strokeWidth="3" />
            <line x1={rightX} y1={fistOfShapeY} x2={rightX + hangerWidth} y2={endOfShapeY} stroke="#000" strokeWidth="4" />
            <line x1={rightX + hangerWidth} y1={fistOfShapeY} x2={rightX} y2={endOfShapeY} stroke="#000" strokeWidth="4" />
        </React.Fragment>
    )
}

export default LinerHanger;