import "./offerTimer.scss";

const OfferTimer = () => {
  return (
    <div className="product-offer">
      <p className="product-offer__text">Offer expires in:</p>
      <div className="product-offer__timer">
        <div className="product-offer__timer-item">
          <p className="product-offer__timer-num">00</p>
          <p className="product-offer__timer-text"></p>
        </div>
        <div className="product-offer__timer-item">
          <p className="product-offer__timer-num"></p>
          <p className="product-offer__timer-text"></p>
        </div>
        <div className="product-offer__timer-item">
          <p className="product-offer__timer-num"></p>
          <p className="product-offer__timer-text"></p>
        </div>
        <div className="product-offer__timer-item">
          <p className="product-offer__timer-num"></p>
          <p className="product-offer__timer-text"></p>
        </div>
      </div>
    </div>
  );
};

export default OfferTimer;
