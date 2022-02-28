import React from "react";
import './css/game.css';
const GameBox = ()=>{
    return (
        <div className="box">
            <img src={[require("./css/60s.png")]}></img>
            <p>This is a game! Download and have fun! The price is only 10$</p>
            <div className="info">
                <h4 className="name">60 Seconds</h4>
                <em>|</em>
                <span className="price">10$</span>
            </div>
        </div>
    );
}

export default GameBox;