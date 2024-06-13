import "./shopPage.scss";

//images
import view1 from './view1.svg';
import view2 from './view2.svg';
import view3 from './view3.svg';
import view4 from './view4.svg';
import banner from './banner.png';

//components
import PagePreview from "../../components/pagePreview/PagePreview";
import ProductFilter from "./productFilter/ProductFilter";

import ProductCard from "../../components/productCard/ProductCard";
import { products } from "../../helpers/products/products";

import Newsletter from "../../components/newsletter/Newsletter";

const ShopPage = () => {
  return (
    <>
      <PagePreview
        title="Shop Page"
        descr="Let’s design the place you always imagined."
        bgImage={banner}
      />

      <section className="shop">
        <div className="container">
          <div className="shop__inner">
            <ProductFilter/>
            <div className="shop-main">

              <div className="shop-main__header">
                <h4 className="shop-main__title">Living Room</h4>

                <label className="product-sort__label"> Sort by
                  <select className="product-sort">
                    <option value="" className="product-sort__item">1</option>
                    <option value="" className="product-sort__item">2</option>
                    <option value="" className="product-sort__item">3</option>
                  </select>
                </label>
                

                <div className="shop-main__view">
                  <button className="shop-main__view-btn">
                    <img src={view1} alt="" className="shop-main__view-btn-img" />
                  </button>
                  <button className="shop-main__view-btn active">
                    <img src={view2} alt="" className="shop-main__view-btn-img" />
                  </button>
                  <button className="shop-main__view-btn">
                    <img src={view3} alt="" className="shop-main__view-btn-img" />
                  </button>
                  <button className="shop-main__view-btn">
                    <img src={view4} alt="" className="shop-main__view-btn-img" />
                  </button></div>
              </div>

              <div className="product-items">
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

              <button className="shop-main__btn">Show more</button>

              
            </div>
          </div>
        </div>
      </section>

      <Newsletter/>
    </>
  );
};

export default ShopPage;
