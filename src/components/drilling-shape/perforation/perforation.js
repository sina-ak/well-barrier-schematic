import React from "react";

const Perforation = ({x1,y1,x2,y2,triangleSize}) => {
    const trianglePoints1 = `${x1},${y1} ${x1},${y1 + triangleSize} ${x1 - triangleSize},${y1 + (triangleSize/2)}`;
    const trianglePoints2 = `${x2},${y2} ${x2},${y2 + triangleSize} ${x2 + triangleSize},${y2 + (triangleSize/2)}`;
    return (
        <React.Fragment>
        <polygon points={trianglePoints1} fill="#ead410" />
        <polygon points={trianglePoints2} fill="#ead410" />
        </React.Fragment>
    )
}

export default Perforation;