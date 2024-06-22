import "./productPage.scss";
import { useState } from "react";

//components
import Newsletter from "../../components/newsletter/Newsletter";
import OfferTimer from "./offerTimer/OfferTimer";
import Counter from "../../components/counter/Counter";
//tabs
import TabNavItem from "../../components/tabsNavigation/tabNavItem/TabNavItem";
import TabContent from "../../components/tabsNavigation/tabContent/TabContent";

//images
import main from './example.png';
import sl1 from './ex1.png';
import sl2 from './ex2.png';
import sl3 from './ex3.png';
import col1 from './col1.png';
import col2 from './col2.png';
import col3 from './col3.png';
import col4 from './col4.png';


import ProductReview from "./ProductReview/ProductReview";
import ProductRating from '../../components/productRating/ProductRating';



const ProductPage = () => {

  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product__inner">
            <div className="product-media">
              <div className="product-slider">
                <div className="product-slider__main">
                  <img src={main} alt="" className="product-slider__main-img" />
                </div>

                <div className="product-slider__items">
                  <div className="product-slider__item">
                    <img src={sl1} alt="" className="product-slider__item-img" />
                  </div>

                  <div className="product-slider__item">
                    <img src={sl2} alt="" className="product-slider__item-img" />
                  </div>

                  <div className="product-slider__item">
                    <img src={sl3} alt="" className="product-slider__item-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-info">
              <ProductRating/>
              <a href="" className="product-info__reviews">
                11 Reviews
              </a>
              <h4 className="product-info__title section__title">Tray Table</h4>
              <p className="product-info__descr">
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>
              <p className="product-info__price">$199.00</p>
              <OfferTimer />

              <div className="product-size">
                <p className="product-size__text">Measurements</p>
                <p className="product-size__num">17 1/2x20 5/8 "</p>
              </div>

              <div className="product-color">
                <p className="product-color__text">Choose Color</p>
                <div className="product-color__main">Black</div>
                <div className="product-color__items">
                  <div className="product-color__item">
                    <img src={col1} alt="" className="product-color__item-img" />
                  </div>
                  <div className="product-color__item">
                    <img src={col2} alt="" className="product-color__item-img" />
                  </div>
                  <div className="product-color__item">
                    <img src={col3} alt="" className="product-color__item-img" />
                  </div>
                  <div className="product-color__item">
                    <img src={col4} alt="" className="product-color__item-img" />
                  </div>
                </div>
              </div>

              <div className="product__buttons">
                <Counter/>
                <button className="product-btn like">Wishlist</button>
                <button className="product-btn basket main-btn">
                  Add to Cart
                </button>
              </div>

              <div className="product__tags">
                <div className="product__tag">
                  <p className="product__tag-name">SKU</p>
                  <p className="product__tag-info">1117</p>
                </div>

                <div className="product__tag">
                  <p className="product__tag-name">CATEGORY</p>
                  <p className="product__tag-info">Living Room, Bedroom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-tabs">
        <div className="container">
          <div className="product-tabs__buttons">
              <TabNavItem title="Additional Info" id="additional" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="product-tabs__btn"/>
              <TabNavItem title="Questions" id="questions" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="product-tabs__btn"/>
              <TabNavItem title="Reviews" id="reviews" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="product-tabs__btn"/>
          </div>

          <div className="product-tabs__info">
            <TabContent id="additional" activeTab={activeTab}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ducimus natus reprehenderit! Laboriosam sunt, itaque cupiditate non perferendis blanditiis eligendi quam repellat deleniti tempore porro exercitationem consectetur officia ducimus reprehenderit!</p>
            </TabContent>

            <TabContent id="questions" activeTab={activeTab}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ducimus natus reprehenderit! Laboriosam sunt, itaque cupiditate non perferendis blanditiis eligendi quam repellat deleniti tempore porro exercitationem consectetur officia ducimus reprehenderit!</p>
            </TabContent>

            <TabContent id="reviews" activeTab={activeTab}>
              <ProductReview/>
            </TabContent>

          </div>
        </div>
        
      </section>

      

      <Newsletter />
    </>
  );
};

export default ProductPage;
