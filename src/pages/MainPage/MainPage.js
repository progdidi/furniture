import "./mainPage.scss";

//images
import promo from "./images/promo.png";
import promotion from "./images/promotion.png";
import prev from './images/prev.svg';
import next from './images/next.svg';

//components
import { collections } from "../../helpers/collections/collections";
import CollectionItem from "../../components/collectionItem/CollectionItem";

import ProductCard from "../../components/productCard/ProductCard";
import { products } from "../../helpers/products/products";

import ArticlesItem from "../../components/articlesItem/ArticlesItem";
import { articles } from "../../helpers/articles/articles";

import Newsletter from "../../components/newsletter/Newsletter";

import Benefits from "../../components/benefits/Benefits";

const MainPage = () => {
  return (
    <>
      <section className="promo">
        <div className="container">
          <div className="promo-slider">
            <div className="promo-slider__items">
              <div className="promo-slider__item">
                <img src={promo} alt="" className="promo-slider__item-img" />
              </div>
            </div>

            <div className="promo-slider__buttons">
              <button className="promo-slider__btn prev"><img src={prev} alt="" className="promo-slider__btn-img" /></button>
              <button className="promo-slider__btn next"><img src={next} alt="" className="promo-slider__btn-img" /></button>
            </div>

            <div className="promo-slider__dots">
              <button className="promo-slider__dot active"></button>
              <button className="promo-slider__dot"></button>
              <button className="promo-slider__dot"></button>
            </div>
            
          </div>

          <div className="promo__info">
            <h1 className="promo__title">Simply Unique/ Simply Better.</h1>
            <p className="promo__text">
              <span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est
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
            <a href="" className="arrivals__link section__link main-link">
              More Products
            </a>
          </div>

          <div className="arrivals__items">
            {products.map((product) => {
              return (
                <ProductCard
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Benefits/>

      <section className="promotion">
        <div className="container-fluid">
          <div className="promotion__inner">
            <img src={promotion} alt="" className="promotion__img" />
            <div className="promotion__info">
              <h6 className="promotion__info-subtitle">SALE UP TO 35% OFF</h6>
              <h4 className="promotion__info-title">
                HUNDREDS of New lower prices!
              </h4>
              <p className="promotion__info-text">
                It’s more affordable than ever to give every room in your home a
                stylish makeover
              </p>
              <a href="" className="promotion__info-link main-link">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="articles">
        <div className="container">
          <div className="section__top">
            <h3 className="articles__title section__title">Articles</h3>
            <a href="" className="articles__link section__link main-link">
              More Articles
            </a>
          </div>
          <div className="articles__inner">
            {articles.slice(0, 3).map((article) => {
              return (
                <ArticlesItem
                  img={article.img}
                  title={article.title}
                  key={article.id}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default MainPage;
