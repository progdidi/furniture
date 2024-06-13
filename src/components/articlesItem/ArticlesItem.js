import "./articlesItem.scss";

const ArticlesItem = ({ img, title, date }) => {
  return (
    <div className="articles-item">
      <img src={img} alt="" className="articles-item__img" />
      <h5 className="articles-item__title">{title}</h5>
      <a href="" className="articles-item__link main-link">
        Read More
      </a>
      <p className="articles-item__date">{date}</p>
    </div>
  );
};

export default ArticlesItem;
