import "./benefitItem.scss";

const BenefitItem = ({ img, title, descr }) => {
  return (
    <div className="benefit-item">
      <img src={img} alt="" className="benefit-item__img" />
      <h6 className="benefit-item__title">{title}</h6>
      <p className="benefit-item__descr">{descr}</p>
    </div>
  );
};

export default BenefitItem;
