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
    const [asdfKeysStatus, setAsdfKeysStatus] = useState({
        top: false,
        bottom: false,
        left: false,
        right: false,
    });
    const [playerOne, setPlayerOne] = useState({ x: 0, y: 0 });
    const [playerTwo, setPlayerTwo] = useState({ x: 0, y: 0 });
    function keyUPs(event) {
        event.preventDefault();
        /*
         * Player one
         **/
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
        /*
         * Player two
         **/
        if (event.key === "w") {
            if (asdfKeysStatus.top === true) {
                setAsdfKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        top: false,
                    };
                });
            }
        }
        if (event.key === "s") {
            if (asdfKeysStatus.bottom === true) {
                setAsdfKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        bottom: false,
                    };
                });
            }
        }
        if (event.key === "a") {
            if (asdfKeysStatus.left === true) {
                setAsdfKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        left: false,
                    };
                });
            }
        }
        if (event.key === "d") {
            if (asdfKeysStatus.right === true) {
                setAsdfKeysStatus((keyState) => {
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
        /*
         * Player one
         **/
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
        /*
         * Player two
         **/
        if (event.key === "w") {
            if (asdfKeysStatus.top === false) {
                setAsdfKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        top: true,
                    };
                });
            }
        }
        if (event.key === "s") {
            if (asdfKeysStatus.bottom === false) {
                setAsdfKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        bottom: true,
                    };
                });
            }
        }
        if (event.key === "a") {
            if (asdfKeysStatus.left === false) {
                setAsdfKeysStatus((keyState) => {
                    return {
                        ...keyState,
                        left: true,
                    };
                });
            }
        }
        if (event.key === "d") {
            if (asdfKeysStatus.right === false) {
                setAsdfKeysStatus((keyState) => {
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
        /*
         * Player one
         **/
        let {
            top: playerOneTop,
            bottom: playerOneBottom,
            left: playerOneLeft,
            right: playerOneRight,
        } = arrowKeysStatus;
        /*
         * Player two
         **/
        let {
            top: playerTwoTop,
            bottom: playerTwoBottom,
            left: playerTwoLeft,
            right: playerTwoRight,
        } = asdfKeysStatus;
        /*
         * Player one
         **/
        let playerOneMoveUp;
        let playerOneMoveDown;
        let playerOneMoveLeft;
        let playerOneMoveRight;
        /*
         * Player two
         **/
        let playerTwoMoveUp;
        let playerTwoMoveDown;
        let playerTwoMoveLeft;
        let playerTwoMoveRight;
        /*
         * Player one
         **/
        if (playerOneTop) {
            playerOneMoveUp = setInterval(() => {
                setPlayerTwo((position) => {
                    return { x: position.x, y: Number(position.y) - 3 };
                });
            }, 20);
        }
        if (playerOneBottom) {
            playerOneMoveDown = setInterval(() => {
                setPlayerTwo((position) => {
                    return { x: position.x, y: Number(position.y) + 3 };
                });
            }, 20);
        }
        if (playerOneLeft) {
            playerOneMoveLeft = setInterval(() => {
                setPlayerTwo((position) => {
                    return { x: Number(position.x) - 3, y: position.y };
                });
            }, 20);
        }
        if (playerOneRight) {
            playerOneMoveRight = setInterval(() => {
                setPlayerTwo((position) => {
                    return { x: Number(position.x) + 3, y: position.y };
                });
            }, 20);
        }
        /*
         * Player two
         **/
        if (playerTwoTop) {
            playerTwoMoveUp = setInterval(() => {
                setPlayerOne((position) => {
                    return { x: position.x, y: Number(position.y) - 3 };
                });
            }, 20);
        }
        if (playerTwoBottom) {
            playerTwoMoveDown = setInterval(() => {
                setPlayerOne((position) => {
                    return { x: position.x, y: Number(position.y) + 3 };
                });
            }, 20);
        }
        if (playerTwoLeft) {
            playerTwoMoveLeft = setInterval(() => {
                setPlayerOne((position) => {
                    return { x: Number(position.x) - 3, y: position.y };
                });
            }, 20);
        }
        if (playerTwoRight) {
            playerTwoMoveRight = setInterval(() => {
                setPlayerOne((position) => {
                    return { x: Number(position.x) + 3, y: position.y };
                });
            }, 20);
        }
        return function () {
            window.removeEventListener("keydown", keyDowns, false);
            window.removeEventListener("keyup", keyUPs, false);
            /*
             * Player one
             **/
            clearInterval(playerOneMoveUp);
            clearInterval(playerOneMoveDown);
            clearInterval(playerOneMoveLeft);
            clearInterval(playerOneMoveRight);
            /*
             * Player two
             **/
            clearInterval(playerTwoMoveUp);
            clearInterval(playerTwoMoveDown);
            clearInterval(playerTwoMoveLeft);
            clearInterval(playerTwoMoveRight);
        };
    }, [arrowKeysStatus, asdfKeysStatus]);
    return (
        <>
            <div id="board">
                <div id="goal-left"></div>
                <Player
                    position={{ x: playerOne.x, y: playerOne.y }}
                    player={"one"}
                />
                <Ball />
                <Player
                    position={{ x: playerTwo.x, y: playerTwo.y }}
                    player={"two"}
                />

                <div id="goal-right"></div>
            </div>
        </>
    );
};

export default Game;
