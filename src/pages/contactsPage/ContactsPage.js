import './contactsPage.scss';

//images
import contacts from './contacts.png';
import con1 from './con1.svg';
import con2 from './con2.svg';
import con3 from './con3.svg';
import Benefits from '../../components/benefits/Benefits';



const ContactsPage = () => {
    return ( 
        <>
            <section className="about">
                <div className="container">
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
            </section>

            <section className="contacts">
                <div className="container">
                    <h4 className="contacts__title section__title">Contact Us</h4>
                    <div className="contacts__items">
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

                    <div className="contacts__inner">
                        <form action="" className="contacts-form">
                            <label htmlFor="" className="contacts-form__label">Full Name
                                <input type="text" className="contacts-form__input"  placeholder='Your Name'/>
                            </label>
                            <label htmlFor="" className="contacts-form__label">Email address
                                <input type="text" className="contacts-form__input"  placeholder='Your Email'/>
                            </label>
                            <label htmlFor="" className="contacts-form__label">message
                                <textarea name="" id="" cols="30" rows="10" className="contacts-form__text" placeholder='Your message'></textarea>
                            </label>
                            <button className="contacts-form__btn main-btn">Send Message</button>
                        </form>

                        <div className="contacts-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2144.3129997857013!2d60.20764897628221!3d57.49003555686636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c1c3ff2c07259d%3A0x21e52644fd145934!2sGazeta%20%22Zvezda%22!5e0!3m2!1sen!2sby!4v1718452122947!5m2!1sen!2sby" width="600" height="440" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    
                </div>

                <Benefits/>
            </section>

            
        </>
     );
}
 
export default ContactsPage;