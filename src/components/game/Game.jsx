import { useEffect, useState } from "react";
import "./game.css";
import Player from "./Player";
import Ball from "./Ball";
const Game = () => {
    const [playerOne, setPlayerOne] = useState({ x: 0, y: 0 });
    const [arrowKeysStatus, setArrowKeysStatus] = useState([
        false,
        false,
        false,
        false,
    ]);
    const [asdfKeysStatus, setasdfKeysStatus] = useState([
        false,
        false,
        false,
        false,
    ]);
    // const [playerTwo, setPlayerTwo] = useState({x : 0,y : 0});
    function movePlayer(event) {
        event.preventDefault();
        if (event.key === "ArrowUp") {
            setPlayerOne((state) => {
                return { ...state, y: Number(state["y"]) - 5 };
            });
        }
        if (event.key === "ArrowUp" && event.key === "ArrowRight") {
            console.log("working");
        }
        if (event.key === "ArrowDown") {
            setPlayerOne((state) => {
                return { ...state, y: Number(state["y"]) + 5 };
            });
            console.log("arrow down");
        }
        if (event.key === "ArrowLeft") {
            setPlayerOne((state) => {
                return { ...state, x: Number(state["x"]) - 5 };
            });
            console.log("arrow left");
        }
        if (event.key === "ArrowRight") {
            setPlayerOne((state) => {
                return { ...state, x: Number(state["x"]) + 5 };
            });
            console.log("arrow right");
        }

        if (event.key === "w") {
            console.log(event.key);
        }
        if (event.key === "s") {
            console.log(event.key);
        }
        if (event.key === "a") {
            console.log(event.key);
        }
        if (event.key === "d") {
            console.log(event.key);
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", movePlayer, false);
        window.addEventListener("keyup", movePlayer, false);
        return function () {
            window.removeEventListener("keydown", movePlayer, false);
            window.addEventListener("keyup", movePlayer, false);
        };
    }, []);
    return (
        <>
            <div id="board" onKeyUp={movePlayer}>
                <div id="goal-left"></div>
                <Player
                    position={{ x: playerOne.x, y: playerOne.y }}
                    player={"one"}
                />
                <Ball />
                {/* <Player style={{}} player={"two"} /> */}
                <div id="goal-right"></div>
            </div>
        </>
    );
};

export default Game;
