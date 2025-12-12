import Card from "./Card";

const players = [
  { name: "Messi", image: "messi.jpg" },
  { name: "Ronaldo", image: "ronaldo.jpg" },
  { name: "Mbappé", image: "mbappe.jpg" }
];

export default function App() {
  return (
    <div className="card-container">
      {players.map(p => (
        <Card key={p.name} player={p} />
      ))}
    </div>

}
