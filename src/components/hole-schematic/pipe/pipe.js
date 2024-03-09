import React from "react";

const Pipe = ({ startOf, size, index, middleOfShapeX }) => {
    const bigestWidth = 700;
    const CoverWidth = 200;
    const widthOfCoverLines = 80
    const calcWidth = bigestWidth - (index * 40);
    const calcCoverWidth = calcWidth + (2*widthOfCoverLines);
    const depression = index * 40;


    return (
        <g >
            <rect x={middleOfShapeX - (calcWidth / 2)} y={startOf} width={calcWidth} height={size} fill={"#acc7ef"} stroke="none" />
        
            <path fill={"#8D8D8D"} stroke="#000" strokeWidth="3"
                d={`
                    M${middleOfShapeX - (calcCoverWidth / 2)},${startOf+size}
                    L${middleOfShapeX - (calcCoverWidth / 2)},${startOf}
                    L${middleOfShapeX - 250},${startOf-20}
                    L${middleOfShapeX - 180},${startOf-28}
                    L${middleOfShapeX - 100},${startOf-32}
                    L${middleOfShapeX },${startOf-35}
                    L${middleOfShapeX + 100},${startOf-32}
                    L${middleOfShapeX + 180},${startOf-28}
                    L${middleOfShapeX + 250},${startOf-20}
                    L${middleOfShapeX + (calcCoverWidth / 2)},${startOf}
                    L${middleOfShapeX + (calcCoverWidth / 2)},${startOf+size}
                    L${middleOfShapeX + (calcWidth / 2)},${startOf+size}
                    L${middleOfShapeX + (calcWidth / 2)},${startOf+widthOfCoverLines}

                    L${middleOfShapeX + 250},${startOf+widthOfCoverLines-20}
                    L${middleOfShapeX + 180},${startOf+widthOfCoverLines-28}
                    L${middleOfShapeX + 100},${startOf+widthOfCoverLines-32}
                    L${middleOfShapeX },${startOf+widthOfCoverLines-35}
                    L${middleOfShapeX - 100},${startOf+widthOfCoverLines-32}
                    L${middleOfShapeX - 180},${startOf+widthOfCoverLines-28}
                    L${middleOfShapeX - 250},${startOf+widthOfCoverLines-20}

                    L${middleOfShapeX - (calcCoverWidth / 2) + widthOfCoverLines},${startOf+widthOfCoverLines}
                    L${middleOfShapeX - (calcCoverWidth / 2) + widthOfCoverLines},${startOf+size}
                    Z
                `}
            />
        </g>
    );
}

export default Pipe;