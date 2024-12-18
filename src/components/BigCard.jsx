const BigCard = (props) => {
  return (
    <div className="BigCard">
      <div className="BigCardImg">
        <img src={props.image} alt="" />
      </div>
      <div className="BigCardText">
        <h3>{props.category}</h3>
        <h2>{props.title}</h2>
        <h4>{props.date}</h4>
      </div>
    </div>
  );
};

export default BigCard;
