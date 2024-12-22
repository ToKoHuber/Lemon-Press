const PostAndAdsContents1 = [
  {
    image:
      "https://dash-api.yld.mn/api/image/9150a4b0-5a23-4aba-9080-34a41b67e398",
    category: "Хэвлэлийн мэдээ",
    title:
      'Fulham клубтэй хамтарсан Adidas брэндийн "Mongolia" загварууд Монголд',
    date: "12 сарын 20, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/1cb1c205-6e96-4f15-b8e1-102bf35e0f7b",
    category: "Interview",
    title:
      "Н.Мөнхнасан: ЗГ-ын гэнэтийн шийдвэрүүдийн золиос нь дотоодын компаниуд, хөрөнгө оруулагчид",
    date: "12 сарын 20, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/5df9f347-0e55-42d0-afc2-b438ec13a97f",
    category: "Уул уурхай",
    title: "Монголын литийн нөөц нэмэгдэж 680,000 тн-д хүрээд байна",
    date: "12 сарын 20, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/e8283b04-6025-471d-8f76-17457ea6b6a4",
    category: "Эдийн засаг",
    title: "ХНС-ын бодлогын хүү буурах нь Монголд ямар өгөөжтэй вэ?",
    date: "12 сарын 20, 2024",
  },
];

const PostAndAdsContents2 = [
  {
    image:
      "https://dash-api.yld.mn/api/image/f8fa1372-46d5-4757-8d49-a9dc25ee78b3",
    category: "Сурталчилгаа",
    title: "Азын хүрд эргүүлээд Фукуок руу",
    date: "12 сарын 20, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/cfd29a6b-73f6-4daf-ad3a-5c431949aedc",
    category: "Улс төр",
    title: 'Утааны асуудлыг "Яндангүй бүс" гаргаж шийдэх юм гэнэ',
    date: "12 сарын 19, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/f4cee43c-b1e6-4211-885b-8dc224a43114",
    category: "Зах зээл",
    title: "Ирэх онд нээлтээ хийх ТОП 10 кино",
    date: "12 сарын 19, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/6bdb8f4f-f124-421c-995b-863f69858179",
    category: "Mining 101",
    title:
      "Оюу толгой орон нутгийн тогтвортой хөгжлийг жил бүр $5 саяар дэмждэг",
    date: "12 сарын 19, 2024",
  },
];

const PostAndAds = () => {
  return (
    <div className="post-ads">
      <div>
        <div className="post-part-1">
          {PostAndAdsContents1.map((post) => {
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
        <div className="post-adbanner">
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241222%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241222T045059Z&X-Goog-Expires=86399&X-Goog-Signature=8034620bea3db51e86a8648f2c87733c34b52e7876e944947b7d93ae8ab9abaaea7ab734f4049ac946f5e506b0685f54286db1843f35a3a31faead0cbc104b87d502947c5d89fd9f8a0efd0b075e170cbb88ef02ff001bce273e1c17b81bb6118165f8c3e20c6e6a04cc90843bd11f1ddc9dffe1eb5236cf3cbd002addc1aeee8aae455d2469e7a3a2cfa15f1d4e4ca932b88ba186774ea407e50d5b806bb1526ac2a96d577ee88a91dab78dffd47238c07cc06799fa151b108e1bab3e920010814f63fc443b21bc8e2a0db2cf38ef3ec18dc62081560284eeea73f26eb8fa246ff75ab530aee2ee0197ce29974966a7ad960ca7f41ba9cc2a4d332550daa7e7&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
        <div className="post-part-2">
          {PostAndAdsContents2.map((post) => {
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
        <div className="post-viewmore">
          <p>Илүү үзэх</p>
        </div>
      </div>
      <div>
        <div className="post-ads-ads">
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/757aa5b9-0e51-440e-96c4-a159059bc841.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241222%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241222T045059Z&X-Goog-Expires=86399&X-Goog-Signature=01046efa0d20110bf4ba2ae89f3cf648f8c879ca6d02b5143e64db933de02029546f1178aa8bc44950cb125a730e44ab7b338e0ae7c2c34fb275b7d7af1afe7e1f8e2bf5c2f09673f865eb497354a72e01a78c237d30f0660affb1e3f658c95ae5d99301b1bfae0fb9bdc27dea121631895d62a59755108b7c9ffe94c7a6af899cb538924e6e4974a01dcaf8a6625d25ac117f7dbb12248dd784b8f5b50b7450bd579e9f906d0f1e1e1778580cbda286b93fac9677338fb3dc665c690aaeee191e1792b47b7261711272f96c7ca1006eee6903e6b41032ccf44adcb954e765f5028accf40613e8b041ceee7233ead1aa4752881596a303ec5b9868e0e0cdf390&X-Goog-SignedHeaders=host"
            alt=""
          />
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/4393e679-2224-4da3-967f-1dfe64500f90.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241222%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241222T045059Z&X-Goog-Expires=86399&X-Goog-Signature=7744671bc3cfbd70fc19c84093a3a11c1c3795c878ccb44c5affe18318ad7091260e54a0a1f8382fd2058702994439ee30c255b515c28008fd7565dbfd49d3766fb8b818a4805af73b32622f718da3aa40f56ea56ecfb4c8242b7f97023aad4978afbb9fd369bfdc2686a3140d7b30eb7dc8c365256bab2b36dc50d431d773dcbf1f39d93b5af06ab1742400d8adaf37a698ee535b94c9f791f42ed71e9e6f5db25135c6e42e28a31ca1dd0a0cc339e8834f1c162debbb7548ba656b1588fcef944d4aedacb873d31fb6a7a7393091292e218a1b0fff2ff3e62e736d1b737573e92c0a91fe2bcfb6d3b4c0d093769e3ccbd6deb8e96f42712f4c2ba578cd309f&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PostAndAds;
