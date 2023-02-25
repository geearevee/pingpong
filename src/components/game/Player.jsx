const Player = (props) => {
    const { player, position } = props; // "one" | "two"
    let { x, y } = position;
    return (
        <div
            style={{ transform: `translate(${x}px, ${y}px)` }}
            className="player"
            id={`player-${player}`}
        ></div>
    );
};
export default Player;
