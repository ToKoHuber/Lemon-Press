const PostsCard = (props) => {
  return (
    <div className="PostsCard">
      <h2>{props.date}</h2>
      <h3>{props.title}</h3>
    </div>
  );
};

export default PostsCard;
