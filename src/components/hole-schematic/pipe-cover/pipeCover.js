import React from "react";

const PipeCover = ({ startOf, size, index, middleOfShapeX }) => {
    const bigestWidth = 1000;
    const CoverWidth = 200;
    const widthOfCoverLines = 80 - (index * 3)
    const calcWidth = bigestWidth - (index * 100);
    const calcCoverWidth = calcWidth + (2*widthOfCoverLines) ;
    return(
            <g >
                
                <path fill={"url(#pipeCoverGradient)"} stroke="none"
                    d={`
                        M${middleOfShapeX - (calcCoverWidth / 2)},${startOf+size}
                        L${middleOfShapeX - (calcCoverWidth / 2)},${startOf}
                        L${middleOfShapeX - (300-(index*26))},${startOf-20}
                        L${middleOfShapeX - (180-(index*15))},${startOf-28}
                        L${middleOfShapeX - (100-(index*8))},${startOf-32}
                        L${middleOfShapeX },${startOf-35}
                        L${middleOfShapeX + (100-(index*8))},${startOf-32}
                        L${middleOfShapeX + (180-(index*15))},${startOf-28}
                        L${middleOfShapeX + (300-(index*26))},${startOf-20}
                        L${middleOfShapeX + (calcCoverWidth / 2)},${startOf}
                        L${middleOfShapeX + (calcCoverWidth / 2)},${startOf+size}
                        L${middleOfShapeX + (calcWidth / 2)},${startOf+size}
                        L${middleOfShapeX + (calcWidth / 2)},${startOf+widthOfCoverLines}
                        L${middleOfShapeX + (300-(index*26))},${startOf+widthOfCoverLines-20}
                        L${middleOfShapeX + (180-(index*15))},${startOf+widthOfCoverLines-28}
                        L${middleOfShapeX + (100-(index*8))},${startOf+widthOfCoverLines-32}
                        L${middleOfShapeX },${startOf+widthOfCoverLines-35}
                        L${middleOfShapeX - (100-(index*8))},${startOf+widthOfCoverLines-32}
                        L${middleOfShapeX - (180-(index*15))},${startOf+widthOfCoverLines-28}
                        L${middleOfShapeX - (300-(index*26))},${startOf+widthOfCoverLines-20}
                        L${middleOfShapeX - (calcCoverWidth / 2) + widthOfCoverLines},${startOf+widthOfCoverLines}
                        L${middleOfShapeX - (calcCoverWidth / 2) + widthOfCoverLines},${startOf+size}
                        Z
                    `}
                />
                <path fill={"url(#UpInPipeCoverGradient)"} stroke="none"
                    d={`
                        M${middleOfShapeX - (calcWidth / 2)},${startOf+ widthOfCoverLines}
                        L${middleOfShapeX - (calcWidth / 2) -10},${startOf+ widthOfCoverLines-10}
                        L${middleOfShapeX - (300 -(index*26))},${startOf+ widthOfCoverLines-20}
                        L${middleOfShapeX - (180-(index*15))},${startOf+ widthOfCoverLines-28}
                        L${middleOfShapeX - (100-(index*8))},${startOf+ widthOfCoverLines-32}
                        L${middleOfShapeX },${startOf+ widthOfCoverLines-35}
                        L${middleOfShapeX + (100-(index*8))},${startOf+ widthOfCoverLines-32}
                        L${middleOfShapeX + (180-(index*15))},${startOf+ widthOfCoverLines-28}
                        L${middleOfShapeX + (300-(index*26))},${startOf+ widthOfCoverLines-20}
                        L${middleOfShapeX + (calcWidth / 2) +10},${startOf+ widthOfCoverLines-10}
                        L${middleOfShapeX + (calcWidth / 2) },${startOf+ widthOfCoverLines}
                        L${middleOfShapeX + (180-(index*15))},${startOf+ widthOfCoverLines+20-28}
                        L${middleOfShapeX + (100-(index*8))},${startOf+ widthOfCoverLines+20-32}
                        L${middleOfShapeX },${startOf+ widthOfCoverLines+20-35}
                        L${middleOfShapeX - (100-(index*8))},${startOf+ widthOfCoverLines+20-32}
                        L${middleOfShapeX - (180-(index*15))},${startOf+ widthOfCoverLines+20-28}
                        L${middleOfShapeX - (calcWidth / 2) },${startOf+ widthOfCoverLines}
                        Z
                    `}
                />
                <path fill={"#C3BBBB"} stroke="none"
                    d={`
                        M${middleOfShapeX - (calcWidth / 2) -10},${startOf+ widthOfCoverLines-10}
                        L${middleOfShapeX - (calcWidth / 2) -10},${startOf+size}
                        L${middleOfShapeX - (calcWidth / 2) },${startOf+ size}
                        L${middleOfShapeX - (calcWidth / 2) },${startOf+ widthOfCoverLines}
                        Z
                    `}
                />
                <path fill={"#C3BBBB"} stroke="none"
                    d={`
                        M${middleOfShapeX + (calcWidth / 2) +10},${startOf+ widthOfCoverLines-10}
                        L${middleOfShapeX + (calcWidth / 2) +10},${startOf+size}
                        L${middleOfShapeX + (calcWidth / 2) },${startOf+ size}
                        L${middleOfShapeX + (calcWidth / 2) },${startOf+ widthOfCoverLines}
                        Z
                    `}
                />
            </g>
        );
    
}

export default PipeCover;