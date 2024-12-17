import BigCard from "./components/Card";
import "./style.css";

const BigCardContent = {
  image:
    "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
  category: "Зах зээл",
  title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
  date: "12 сарын 17, 2024",
};

const App = () => {
  return (
    <div className="container-1">
      <div className="right">
        <BigCard
          image={BigCardContent.image}
          category={BigCardContent.category}
          title={BigCardContent.title}
          date={BigCardContent.date}
        />
      </div>
      <div className="left"></div>
    </div>
  );
};

export default App;
