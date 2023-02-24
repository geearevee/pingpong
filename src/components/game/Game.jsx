import { useEffect, useState } from "react";
import "./game.css";
import Player from "./Player";
import Ball from "./Ball";
const Game = () => {
    const [arrowKeysStatus, setArrowKeysStatus] = useState({
        top: false,
        bottom: false,
        left: false,
        right: false,
    });
    const [playerOne, setPlayerOne] = useState({ x: 0, y: 0 });
    function keyUPs(event) {
        event.preventDefault();
        console.log("Key up is firing");
        if (event.key === "ArrowUp") {
            if (arrowKeysStatus.top === true) {
                setArrowKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        top: false,
                    };
                });
            }
        }
        if (event.key === "ArrowDown") {
            if (arrowKeysStatus.bottom === true) {
                setArrowKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        bottom: false,
                    };
                });
            }
        }
        if (event.key === "ArrowLeft") {
            if (arrowKeysStatus.left === true) {
                setArrowKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        left: false,
                    };
                });
            }
        }
        if (event.key === "ArrowRight") {
            if (arrowKeysStatus.right === true) {
                setArrowKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        right: false,
                    };
                });
            }
        }
    }
    function keyDowns(event) {
        event.preventDefault();
        console.log("firing in key down");
        if (event.key === "ArrowUp") {
            if (arrowKeysStatus.top === false) {
                setArrowKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        top: true,
                    };
                });
            }
        }
        if (event.key === "ArrowDown") {
            if (arrowKeysStatus.bottom === false) {
                setArrowKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        bottom: true,
                    };
                });
            }
        }
        if (event.key === "ArrowLeft") {
            if (arrowKeysStatus.left === false) {
                setArrowKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        left: true,
                    };
                });
            }
        }
        if (event.key === "ArrowRight") {
            if (arrowKeysStatus.right === false) {
                setArrowKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        right: true,
                    };
                });
            }
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", keyDowns, false);
        window.addEventListener("keyup", keyUPs, false);
        let { top, bottom, left, right } = arrowKeysStatus;
        console.log("will move or not");
        console.log(top, bottom, left, right);
        let moveUp;
        let moveDown;
        let moveLeft;
        let moveRight;
        if (top) {
            moveUp = setInterval(() => {
                setPlayerOne((position) => {
                    return { x: position.x, y: Number(position.y) - 2 };
                });
            }, 20);
        }
        if (bottom) {
            moveDown = setInterval(() => {
                setPlayerOne((position) => {
                    return { x: position.x, y: Number(position.y) + 2 };
                });
            }, 20);
        }
        if (left) {
            moveLeft = setInterval(() => {
                setPlayerOne((position) => {
                    return { x: Number(position.x) - 2, y: position.y };
                });
            }, 20);
        }
        if (right) {
            moveRight = setInterval(() => {
                setPlayerOne((position) => {
                    return { x: Number(position.x) + 2, y: position.y };
                });
            }, 20);
        }
        return function () {
            window.removeEventListener("keydown", keyDowns, false);
            window.removeEventListener("keyup", keyUPs, false);
            clearInterval(moveUp);
            clearInterval(moveDown);
            clearInterval(moveLeft);
            clearInterval(moveRight);
        };
    }, [arrowKeysStatus]);
    return (
        <>
            <div id="board">
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
