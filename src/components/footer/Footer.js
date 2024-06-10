import "./footer.scss";

import SocialList from "./socialList/SocialList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top__title">
            <a href="" className="footer-top__logo">
              Furniture
            </a>
            <div className="divider">|</div>
            <p className="footer-top__text">Gift & Decoration Store</p>
          </div>
          <nav className="footer-menu">
            <ul className="footer-menu__list">
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__list-link">
                  Home
                </a>
              </li>
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__list-link">
                  Shop
                </a>
              </li>
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__list-link">
                  Product
                </a>
              </li>
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__list-link">
                  Blog
                </a>
              </li>
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__list-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom__text">
            Copyright © 2023 3legant. All rights reserved
          </p>
          <div className="footer-bottom__links">
            <a href="" className="footer-bottom__link">
              Privacy Policy
            </a>
            <a href="" className="footer-bottom__link">
              Terms of Use
            </a>
          </div>

          <SocialList/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
