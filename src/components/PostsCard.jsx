const PostsCard = (props) => {
  return (
    <div className="PostsCard">
      <h4>{props.date}</h4>
      <h3>{props.title}</h3>
    </div>
  );
};

export default PostsCard;
