const SinglePostCard = (props) => {
  return (
    <div className="SinglePostCard">
      <h2>{props.category}</h2>
      <h3>{props.title}</h3>
    </div>
  );
};

export default SinglePostCard;
