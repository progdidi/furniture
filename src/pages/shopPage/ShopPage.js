import "./shopPage.scss";
import PagePreview from "../../components/pagePreview/PagePreview";

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
            <div className="shop-filter">
              <ul className="filter-list">
                <li className="filter-list__item">
                  <button className="filter-list-btn">Living Room</button>
                </li>
                <li className="filter-list__item">
                  <button className="filter-list-btn">Bedroom</button>
                </li>
                <li className="filter-list__item">
                  <button className="filter-list-btn">Kitchen</button>
                </li>
                <li className="filter-list__item">
                  <button className="filter-list-btn">Bathroom</button>
                </li>
                <li className="filter-list__item">
                  <button className="filter-list-btn">Dinning</button>
                </li>
                <li className="filter-list__item">
                  <button className="filter-list-btn">Outdoor</button>
                </li>
                <li className="filter-list__item">
                  <button className="filter-list-btn">Outdoor</button>
                </li>
                <li className="filter-list__item">
                  <button className="filter-list-btn">Outdoor</button>
                </li>
              </ul>
            </div>
            <div className="shop__items"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
