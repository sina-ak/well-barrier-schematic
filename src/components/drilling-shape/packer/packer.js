import React from "react";

const Packer = ({ packerDepth, totalDepth, middleOfShapeX, middleOfShapeY, width,offsetY }) => {
    let verticalDepth = packerDepth + offsetY;
    let horizontalDepth = middleOfShapeX;
    if (packerDepth > totalDepth) {
        verticalDepth = totalDepth + offsetY;
        horizontalDepth = packerDepth - totalDepth + middleOfShapeX + (width/2);
    }
    if (packerDepth > totalDepth) {
        return (
           
            <React.Fragment>
                <g xmlns="http://www.w3.org/2000/svg" transform={`rotate(90, ${horizontalDepth}, ${verticalDepth})`} >
                    <rect x={horizontalDepth} y={verticalDepth} width={width} height="50" rx="7" fill="#3C3737" />
                </g>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <g xmlns="http://www.w3.org/2000/svg">
                    <rect x={horizontalDepth - (width / 2)} y={verticalDepth} width={width} height="50" rx="7" fill="#3C3737" />
                </g>
            </React.Fragment>
        )
    }

}

export default Packer;