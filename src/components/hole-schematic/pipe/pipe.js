import React from "react";
import DepthIndicator from "../depth-indicator/depthIndicator";

const Pipe = ({ startOf, size, index, middleOfShapeX }) => {
    const bigestWidth = 1000;
    const calcWidth = bigestWidth - (index * 100);

    return (
            <rect x={middleOfShapeX - (calcWidth / 2)} y={startOf} width={calcWidth} height={size + (index * 10)} rx="20" fill={"url(#pipeGradient)"} stroke="none" />
    );
}

export default Pipe;