import "./shopPage.scss";

//images
import banner from './banner.png';

//components
import PagePreview from "../../components/pagePreview/PagePreview";
import FilterMenu from "./FilterMenu/FilterMenu";
import ProductFilter from "./ProductFilter/ProductFilter";

import ProductCard from "../../components/productCard/ProductCard";
import { products } from "../../helpers/products/products";

import Newsletter from "../../components/newsletter/Newsletter";

import LayoutChoice from "../../components/layoutChoice/LayoutChoice";


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

            <FilterMenu/>

            <div className="shop-main">

              <div className="shop-main__header">
                <ProductFilter/>
                <h4 className="shop-main__title">Living Room</h4>

                <div className="product-view">
                  <label className="product-sort__label"> Sort by
                    <select className="product-sort">
                      <option value="" className="product-sort__item">1</option>
                      <option value="" className="product-sort__item">2</option>
                      <option value="" className="product-sort__item">3</option>
                    </select>
                  </label>
                  

                  <LayoutChoice/>
                </div>
                
              </div>

              <div className="product-items">
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

              <button className="shop-main__btn white-btn">Show more</button>

              
            </div>
          </div>
        </div>
      </section>

      <Newsletter/>
    </>
  );
};

export default ShopPage;
