import "./newsletter.scss";
import Modal from "../modals/Modal";
import { useState } from "react";

const Newsletter = () => {

  const [showModal, setShowModal] = useState(false);

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
          <input type="email" className="newsletter-form__input" placeholder="Email address" required/>
          <button className="newsletter-form__btn" onClick={() => setShowModal(!showModal)}>Signup</button>
        </form>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} activeModal="newsletter"/>
    </div>
  );
};

export default Newsletter;
