export default function Card({ player }) {
  return (
    <div className="card">
      <img src={player.image} className="player-img" />
      <h2>{player.name}</h2>
    </div>
  );
}
