const Player = (props) => {
  const {player, position}  = props; // "one" | "two"
//   position={{x : playerOne.x, y: playerOne.y}}
console.log(position);

  return (
    <div style={{top: position.y + "px", right: position.x + "px"}}  className="player" id={`player-${player}`}></div>
  )
}
export default Player