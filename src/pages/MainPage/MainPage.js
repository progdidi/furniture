import "./mainPage.scss";

//images
import promo from "./images/promo.png";

//components
import { collections } from "../../helpers/collections/collections";
import CollectionItem from "../../components/collectionItem/CollectionItem";

import ProductCard from "../../components/productCard/ProductCard";
import { products } from "../../helpers/products/products";

const MainPage = () => {
  return (
    <>
      <section className="promo">
        <div className="container">
          <div className="promo-slider">
            <div className="promo-slider__item">
              <img src={promo} alt="" className="promo-slider__item-img" />
            </div>
          </div>

          <div className="promo__info">
            <h1 className="promo__title">Simply Unique/Simply Better.</h1>
            <p className="promo__text">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="collection">
        <div className="container">
          <div className="collection__inner">
            {collections.map((collection) => {
              return (
                <CollectionItem
                  name={collection.name}
                  img={collection.img}
                  key={collection.id}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="arrivals">
        <div className="container">
          <div className="section__top">
            <h3 className="arrivals__title section__title">New Arrivals</h3>
            <a href="" className="arrivals__link section__link">
              More Products
            </a>
          </div>

          <div className="arrivals__items">
            {products.map((product) => {
              return (
                <ProductCard
                  name={product.name}
                  price={product.price}
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
