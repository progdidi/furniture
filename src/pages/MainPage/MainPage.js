import './mainPage.scss';

//images
import promo from './images/promo.png';
import col1 from './images/col1.png';
import col2 from './images/col2.png';
import col3 from './images/col3.png';


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
                    <p className="promo__text">3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
                </div>
                
            </div>
        </section>

        <section className="collection">
            <div className="container">
                <div className="collection__inner">
                    <div className="collection__item">
                        <img src={col1} alt="" className="collection__item-img" />
                        <h5 className="collection__item-title">Living Room</h5>
                        <a href="" className="collection__item-link">Shop Now</a>
                    </div>
                    <div className="collection__item">
                        <img src={col2} alt="" className="collection__item-img" />
                        <h5 className="collection__item-title">Bedroom</h5>
                        <a href="" className="collection__item-link">Shop Now</a>
                    </div>
                    <div className="collection__item">
                        <img src={col3} alt="" className="collection__item-img" />
                        <h5 className="collection__item-title">Kitchen</h5>
                        <a href="" className="collection__item-link">Shop Now</a>
                    </div>

                </div>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;