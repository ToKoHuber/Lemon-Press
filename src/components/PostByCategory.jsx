const PostByCategoryContent = [
  {
    category: "Бизнес",
    image:
      "https://dash-api.yld.mn/api/image/90d5d4f6-1b7e-464d-9247-1c137ee7365a",
    title: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    date: "12 сарын 18, 2024",
  },
  {
    category: "Бизнес",
    image:
      "https://dash-api.yld.mn/api/image/f486afba-6fea-4318-baef-27c0e2582ff4",
    title: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    date: "12 сарын 13, 2024",
  },
  {
    category: "Бизнес",
    image:
      "https://dash-api.yld.mn/api/image/13aeb310-9ed2-478c-bf7a-a5f21ccc34c8",
    title: "Apple Pay 10 жилийн ойгоороо Монголд нэвтэрлээ",
    date: "12 сарын 11, 2024",
  },
];

const PostByCategory = () => {
  return (
    <div className="PostByCategory-main">
      <div className="PostByCategory-top">
        <div className="PostByCategory-title">
          <p>Бизнес</p>
        </div>
        <div className="PostByCategory-section-line"></div>
        <div className="PostByCategory-more">
          <p>Илүү үзэх</p>
        </div>
      </div>
      <div className="PostByCategory-bottom">
        {PostByCategoryContent.map((props) => {
          return (
            <div className="PostByCategory-content">
              <div className="PostByCategory-image">
                <img src={props.image} alt="" />
              </div>
              <div className="PostByCategory-text">
                <h2>{props.category}</h2>
                <h3>{props.title}</h3>
                <h4>{props.date}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostByCategory;
