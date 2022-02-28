import React from "react";
import './css/game.css';
import GameBox from "./gamebox";
const Game = ()=>{
    return (
        <div className="boxes">
            <ul>
                <GameBox/>
                <GameBox/>
                <GameBox/>
            </ul>
        </div>
    );
}

export default Game;