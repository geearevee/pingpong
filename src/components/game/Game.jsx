import { useEffect,useState } from "react";
import "./game.css";
import Player from "./Player";
import Ball from "./Ball";
const Game = () => {
  const [playerOne, setPlayerOne] = useState({x: 0,y : 0});
  // const [playerTwo, setPlayerTwo] = useState({x : 0,y : 0});
  function movePlayer(event){
    if(event.key === "ArrowUp"){
      setPlayerOne(state => {
        return {...state,y : Number(state["y"]) + 1}
      })
    }else if(event.key === "ArrowDown"){
      setPlayerOne(state => {
        return {...state,y : Number(state["y"]) - 1}
      })
      console.log("arrow down");
    }else if(event.key === "ArrowLeft"){
      setPlayerOne(state => {
        return {...state,x : Number(state["x"]) + 1}
      })
      console.log("arrow left");
    }else if(event.key === "ArrowRight"){
      setPlayerOne(state => {
        return {...state,x : Number(state["x"]) - 1}
      })
      console.log("arrow right");
    }
    
    if(event.key === "w"){
      console.log(event.key);
    }else if(event.key === "s"){
      console.log(event.key);
    }else if(event.key === "a"){
      console.log(event.key);
    }else if(event.key === "d"){
      console.log(event.key);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', movePlayer, false);
    return function() {
      return window.removeEventListener('keydown', movePlayer, false);
    } 
  },[])
  return (
    <>
      <div id="board" onKeyUp={movePlayer}>
        <div id="goal-left"></div>
        <Player position={{x : playerOne.x, y: playerOne.y}} player={"one"} />
        <Ball/>
        <Player style={{}} player={"two"} />
        <div id="goal-right"></div>
      </div>
    </>
  )
}

export default Game