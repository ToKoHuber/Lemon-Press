const SinglePostCard = (props) => {
  return (
    <div className="SinglePostCard">
      <div className="SinglePostCardText">
        <h2>{props.category}</h2>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default SinglePostCard;
