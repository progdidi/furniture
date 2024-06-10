import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container-fluid">
        <h4 className="newsletter__title section__title">
          Join Our Newsletter
        </h4>
        <p className="newsletter__descr">
          Sign up for deals, new products and promotions
        </p>
        <form action="" className="newsletter-form">
          <input type="text" className="newsletter-form__input" />
          <button className="newsletter-form__btn">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
