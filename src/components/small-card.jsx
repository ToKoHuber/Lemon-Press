const SmallCard = (props) => {
  return (
    <div className="SmallCard">
      <h3>{props.category}</h3>
      <h2>{props.title}</h2>
      <h4>{props.date}</h4>
    </div>
  );
};

export default SmallCard;
