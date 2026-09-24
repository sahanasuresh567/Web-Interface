import "./HobbyCard.css";

function HobbyCard(props) {
  return (
    <div className="hobby-card">
      <img src={props.image} alt={props.hobbyname} />
      <h2>{props.hobbyname}</h2>
      <p>{props.des}</p>
    </div>
  );
}

export default HobbyCard;