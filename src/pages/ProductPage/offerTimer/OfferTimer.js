import "./offerTimer.scss";

const OfferTimer = () => {
  return (
    <div className="product-offer">
      <p className="product-offer__text">Offer expires in:</p>
      <div className="product-offer__timer">
        <div className="product-offer__timer-item">
          <p className="product-offer__timer-num">02</p>
          <p className="product-offer__timer-text">Days</p>
        </div>
        <div className="product-offer__timer-item">
          <p className="product-offer__timer-num">12</p>
          <p className="product-offer__timer-text">Hours</p>
        </div>
        <div className="product-offer__timer-item">
          <p className="product-offer__timer-num">30</p>
          <p className="product-offer__timer-text">Minutes</p>
        </div>
        <div className="product-offer__timer-item">
          <p className="product-offer__timer-num">10</p>
          <p className="product-offer__timer-text">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default OfferTimer;
