import BigCard from "./components/BigCard";
import SmallCard from "./components/small-card";
import PostsCard from "./components/PostsCard";
import SinglePostCard from "./components/SinglePostCard";
import HeaderCard from "./components/Header";
import NewsLetterSub from "./components/NewsLetterSUb";
import VideoBanner from "./components/VideoBanner";
import PostBanner from "./components/PostBanner";
import "./style.css";
import "./small-card.css";
import "./postsCard.css";
import "./SinglePostCard.css";
import "./header.css";
import "./newslettersub.css";
import "./video-banner.css";
import "./post-banner.css";

const BigCardContent = {
  image:
    "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
  category: "Зах зээл",
  title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
  date: "12 сарын 17, 2024",
};

const SmallCardContent = [
  {
    category: "ЗАХ ЗЭЭЛ",
    title: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
    date: "12 сарын 18, 2024",
  },
  {
    category: "ЗАХ ЗЭЭЛ",
    title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "12 сарын 17, 2024",
  },
  {
    category: "ЭДИЙН ЗАСАГ",
    title: "Казакстаны хөгжлийн цаана",
    date: "12 сарын 17, 2024",
  },
];

const PostsCardCOntent = [
  {
    title: "✈️🌍 Нэг тэнгэрт нэг л компани",
    date: "Tue, 17 Dec 2024 23:00:00 +0000",
  },
  {
    date: "Mon, 16 Dec 2024 23:00:00 +0000",
    title: "🇰🇿🇲🇳 Ижил замаар ялгаатай хурдаар",
  },
  {
    date: "Sun, 15 Dec 2024 23:00:00 +0000",
    title: "🪙 Крипто самурай Нью-Йоркт",
  },
  {
    date: "Thu, 12 Dec 2024 23:00:00 +0000",
    title: "🤜 Дэлхийд буурч, Монголд өснө тэр юу вэ?",
  },
  {
    date: "Wed, 11 Dec 2024 23:00:00 +0000",
    title: "🔮🪄 Accio: Тэр эргэн ирнэ",
  },
  { date: "Tue, 10 Dec 2024 23:00:00 +0000", title: "🇲🇳 Apple Pay Монголд " },
  {
    date: "Mon, 09 Dec 2024 23:00:00 +0000",
    title: "📢 “Ухаалаг засаг” II = $40 тэрбум",
  },
  {
    date: "Sun, 08 Dec 2024 23:00:00 +0000",
    title: "🤡 Монголын ТОП асуудал: Өөртөө хэт итгэлтэй",
  },
  { date: "Thu, 05 Dec 2024 23:00:00 +0000", title: "📢 Худалдааны дайн 2.0" },
  {
    date: "Wed, 04 Dec 2024 23:00:00 +0000",
    title: "🤥 Сандал ширээний онц байдал",
  },
  {
    date: "Tue, 03 Dec 2024 23:00:00 +0000",
    title: "🪬 Хилийн чанад дахь хамгаалал",
  },
  {
    date: "Mon, 02 Dec 2024 23:00:00 +0000",
    title: "Танхимын Ерөнхийлөгч ➡️ Шийдэх асуудал",
  },
  {
    date: "Sun, 01 Dec 2024 23:00:00 +0000",
    title: "💰 Хамгийн том төгрөгийн бонд",
  },
  { date: "Thu, 28 Nov 2024 23:00:00 +0000", title: "✋ Даатгал: 4+1=5" },
  { date: "Wed, 27 Nov 2024 23:00:00 +0000", title: "🔥 Шинэ бонд айсуй" },
  {
    date: "Tue, 26 Nov 2024 23:00:00 +0000",
    title: "😷 Агаарын бохирдол = ₮3.9 их наяд",
  },
  {
    date: "Sun, 24 Nov 2024 23:00:00 +0000",
    title: "🇻🇳 Монголын МАА-г аварна",
  },
  {
    date: "Thu, 21 Nov 2024 23:00:00 +0000",
    title: "🏠 Монгол мөрөөдөл: Орон сууц ",
  },
  { date: "Wed, 20 Nov 2024 23:00:00 +0000", title: "!!️ Том асуудал: ТӨХК" },
  {
    date: "Tue, 19 Nov 2024 23:00:00 +0000",
    title: "🥇 Play Store-н аваргууд",
  },
];

const SinglePostCardContent = {
  category: "ХЭВЛЭЛИЙН МЭДЭЭ",
  title: "Monkondi брэнд Just Chocolate-г зах зээлд нэвтрүүллээ",
};

const App = () => {
  return (
    <div>
      <HeaderCard />
      <VideoBanner />
      <PostBanner />
      <div className="container-1">
        <div className="right">
          <BigCard
            image={BigCardContent.image}
            category={BigCardContent.category}
            title={BigCardContent.title}
            date={BigCardContent.date}
          />
        </div>
        <div className="left">
          <img
            src="https://dash-api.yld.mn/api/image/f64012ed-9f61-469c-934e-593a79b152d2"
            alt=""
          />
          {SmallCardContent.map((medee) => {
            return (
              <SmallCard
                category={medee.category}
                title={medee.title}
                date={medee.date}
              />
            );
          })}
        </div>
      </div>
      <div className="container-2">
        <div className="left">
          <h2>Товхимлууд</h2>
          <div className="scroll">
            {PostsCardCOntent.map((medee) => {
              return <PostsCard date={medee.date} title={medee.title} />;
            })}
          </div>
        </div>
        <div className="center">
          <SinglePostCard
            category={SinglePostCardContent.category}
            title={SinglePostCardContent.title}
          />
        </div>
        <div className="right">
          <img
            src="https://dash-api.yld.mn/api/image/f64012ed-9f61-469c-934e-593a79b152d2"
            alt=""
          />
          {SmallCardContent.map((medee) => {
            return (
              <SmallCard
                category={medee.category}
                title={medee.title}
                date={medee.date}
              />
            );
          })}
        </div>
      </div>
      <NewsLetterSub />
    </div>
  );
};

export default App;
