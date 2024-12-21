const PostAndAdsContents = [
  {
    image:
      "https://dash-api.yld.mn/api/image/9150a4b0-5a23-4aba-9080-34a41b67e398",
    category: "Хэвлэлийн мэдээ",
    title:
      'Fulham клубтэй хамтарсан Adidas брэндийн "Mongolia" загварууд Монголд',
    date: "12 сарын 20, 2024",
  },
  {
    image: "",
    category: "",
    title: "",
    date: "",
  },
  {
    image: "",
    category: "",
    title: "",
    date: "",
  },
  {
    image: "",
    category: "",
    title: "",
    date: "",
  },
  {
    image: "",
    category: "",
    title: "",
    date: "",
  },
  {
    image: "",
    category: "",
    title: "",
    date: "",
  },
  {
    image: "",
    category: "",
    title: "",
    date: "",
  },
  {
    image: "",
    category: "",
    title: "",
    date: "",
  },
];

const PostAndAds = () => {
  return (
    <div className="post-ads">
      <div className="post-part-1">
        {PostAndAdsContents.map((post) => {
          return (
            <div>
              <div className="post-ads-posts">
                <div className="post-ads-post-img">
                  <img src={post.image} alt="" />
                </div>
                <div className="post-ads-post-details">
                  <h2>{post.category}</h2>
                  <h3>{post.title}</h3>
                  <h4>{post.date}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="post-adbanner"></div>
      <div className="post-part-2"></div>
      <div className="post-viewmore"></div>

      <div className="post-ads-ads">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default PostAndAds;
