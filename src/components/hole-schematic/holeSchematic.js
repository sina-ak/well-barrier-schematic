import React from "react";
import PipeCover from "./pipe-cover/pipeCover";
import Pipe from "./pipe/pipe";



const HoleSchematic = () => {
    const offsetY = 100;
    const totalZoneWidth = 3000;
    const middleOfShapeX = totalZoneWidth / 2;
    const depression = 22;
    const holesData = [
        { depth: 300, inch: 36 },
        { depth: 600, inch: 24 },
        { depth: 200, inch: 17 },
        { depth: 600, inch: 12 },
        { depth: 800, inch: 17 },
        { depth: 200, inch: 17 },
        { depth: 400, inch: 17 },
        { depth: 300, inch: 17 },
        { depth: 500, inch: 17 },
        { depth: 1100, inch: 17 },
    ];
    let sumSize = offsetY;
    const pipeArray = [];
    const PipeCoverArray = [];
    holesData.forEach((el, index) => {
        pipeArray.push(
            <Pipe key={index} startOf={sumSize} size={el.depth} index={index} middleOfShapeX={middleOfShapeX} />
        )
        PipeCoverArray.push(
            <PipeCover key={index} startOf={sumSize} size={el.depth} index={index} middleOfShapeX={middleOfShapeX} />
        )
        if(el.depth - ((index + 1) * depression) > 100){
            sumSize += (el.depth - ((index + 1) * depression));
        }
        else{
            sumSize += (el.depth - (el.depth/3));
        }
    })





    return (

        <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${totalZoneWidth} ${sumSize + 300}`}
        >
            {pipeArray.map(item => item)}
            {PipeCoverArray.reverse().map(item => item)}
            <defs>
                <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6F85A6" />
                    <stop offset="2%" stopColor="#97AFD4" />
                    <stop offset="30%" stopColor="#BACDEA" />
                    <stop offset="50%" stopColor="#7A91B3" />
                    <stop offset="70%" stopColor="#BACDEA" />
                    <stop offset="80%" stopColor="#97AFD4" />
                    <stop offset="100%" stopColor="#6F85A6" />
                </linearGradient>
                <linearGradient id="pipeCoverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#707070" />
                    <stop offset="50%" stopColor="#D9D9D9" />
                    <stop offset="100%" stopColor="#707070" />
                </linearGradient>
                <linearGradient id="UpInPipeCoverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#444444" />
                    <stop offset="45%" stopColor="#969696" />
                    <stop offset="55%" stopColor="#969696" />
                    <stop offset="100%" stopColor="#444444" />
                </linearGradient>
            </defs>
        </svg>

    );
}

export default HoleSchematic;