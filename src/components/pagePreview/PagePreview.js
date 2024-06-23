import "./pagePreview.scss";
import { NavLink } from "react-router-dom";

const PagePreview = ({ title, descr, bgImage, currentPage }) => {
  return (
    <section className="page-preview" >
      <div className="container">
        <div className="page-preview__inner" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="page-preview__nav">
            <div className="navigation__inner">
              <NavLink to="/" className="navigation__link">Home</NavLink>
              <p className="navigation__current">{currentPage}</p>
            </div>
          </div>
          <h3 className="page-preview__title page__title">{title}</h3>
          <p className="page-preview__descr">{descr}</p>
        </div>
      </div>
      
    </section>
  );
};

export default PagePreview;
