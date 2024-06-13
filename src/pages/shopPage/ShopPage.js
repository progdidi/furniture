import "./shopPage.scss";
import PagePreview from "../../components/pagePreview/PagePreview";
import ProductFilter from "./productFilter/ProductFilter";

const ShopPage = () => {
  return (
    <>
      <PagePreview
        title="Shop Page"
        descr="Let’s design the place you always imagined."
      />

      <section className="shop">
        <div className="container">
          <div className="shop__inner">
            <ProductFilter/>
            <div className="shop__items"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
