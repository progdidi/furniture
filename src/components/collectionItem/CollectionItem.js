import "./collectionItem.scss";

const CollectionItem = ({ img, name, link }) => {
  return (
    <div className="collection-item">
      <img src={img} alt="" className="collection-item__img" />
      <div className="collection-item__info">
        <h5 className="collection-item__title">{name}</h5>
        <a href="" className="collection-item__link main-link">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default CollectionItem;
