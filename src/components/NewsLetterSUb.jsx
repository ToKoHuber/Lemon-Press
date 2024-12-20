const NewsLetterSub = () => {
  return (
    <div className="NewsLetterSub">
      <div className="NewsLetterSubFrame">
        <div className="NewsLetterSubContents">
          <div className="newsletter-title">NEWSLETTER</div>
          <div className="newsletter-promise">
            <h3>
              Хөрөнгө оруулалт, бизнесийн тоймыг
              <span className="newsletter-promise-bold-text"> 5 минутад</span>
            </h3>
          </div>
          <div className="newsletter-email-input">
            <input
              className="Newsletter-email"
              type="email"
              name="email"
              id=""
              placeholder="Имэйл хаяг"
            />
            <button className="Newsletter-Button">Уншаад үзье</button>
          </div>
          <div className="newsletter-desc">
            <p>
              Таны шийдвэр гаргалтад зайлшгүй хэрэгтэй мэдээллийг агуулсан имэйл
              товхимлыг ажлын өдөр бүр, өглөө 07:00 цагт үнэгүй илгээнэ.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NewsLetterSub;
