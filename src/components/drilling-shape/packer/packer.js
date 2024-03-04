import React from "react";

const Packer = ({ packerDepth, middleOfShapeX, width, offsetY }) => {
    let verticalDepth = packerDepth + offsetY;
    let horizontalDepth = middleOfShapeX;

    return (
        <React.Fragment>
            <g xmlns="http://www.w3.org/2000/svg">
                <rect x={horizontalDepth - (width / 2)} y={verticalDepth} width={width} height="50" rx="7" fill="#3C3737" />
            </g>
        </React.Fragment>
    )

}

export default Packer;