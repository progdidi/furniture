import contacts from './contacts.png';
import con1 from './con1.svg';
import con2 from './con2.svg';
import con3 from './con3.svg';

const ContactsPage = () => {
    return ( 
        <>
            <section className="about">
                <div className="container">
                    <div className="about__inner">
                        <h4 className="about__title page__title">We believe in sustainable decor. We’re passionate about life at home.</h4>
                        <p className="about__text">Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present</p>

                        <div className="about-main">
                            <img src={contacts} alt="" className="about-main__img" />
                            <div className="about-main__info">
                                <h5 className="about-main__info-title section__title">About Us</h5>
                                <p className="about-main__info-text">3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
Our customer service is always prepared to support you 24/7</p>
                                <a href="" className="about-main__info-link main-link">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contacts">
                <div className="container">
                    <h4 className="contacts__title section__title">Contact Us</h4>
                    <div className="contacts__inner">
                        <div className="contacts__item">
                            <img src={con1} alt="" className="contacts__item-img" />
                            <h6 className="contacts__item-title">Address</h6>
                            <p className="contacts__item-text">234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
                        </div>
                        <div className="contacts__item">
                            <img src={con2} alt="" className="contacts__item-img" />
                            <h6 className="contacts__item-title">Contact Us</h6>
                            <p className="contacts__item-text">+84 234 567 890</p>
                        </div>
                        <div className="contacts__item">
                            <img src={con3} alt="" className="contacts__item-img" />
                            <h6 className="contacts__item-title">Email</h6>
                            <p className="contacts__item-text">hello@3legant.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default ContactsPage;