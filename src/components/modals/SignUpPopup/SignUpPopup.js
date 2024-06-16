import sign from './sign.png';
import './signUpPopup.scss';

const SignUpPopup = ({showSignUp}) => {
    return ( 
        <section className={showSignUp ? "sign-up active" : "sign-up"}>
            <div className="container-fluid">
                <div className="sign-up__inner">
                    <div className="sign-up__media">
                        <p className="sign-up__media-text">3legant.</p>
                        <img src={sign} alt="" className="sign-up__media-img" />
                    </div>
                    <div className="sign-up__info">
                        <h4 className="sign-up__info-title section__title">Sign up</h4>
                        <p className="sign-up__info-text">Already have an account? <a href="" className="sign-up__info-link">Sign in</a></p>
                        <form action="" className="sign-up__form">
                            <input type="text" className="sign-up__form-input" placeholder='Your name'/>
                            <input type="text" className="sign-up__form-input" placeholder='Username'/>
                            <input type="text" className="sign-up__form-input" placeholder='Email address'/>
                            <input type="text" className="sign-up__form-input password" placeholder='Password'/>
                            <label htmlFor="" className="sign-up__form-label">
                                <input type="checkbox" className="sign-up__form-input" />
                               <span>I agree with <a href="" className="sign-up__form-link">Privacy Policy</a>  and <a href="" className="sign-up__form-link">Terms of Use</a></span> 
                            </label>

                            <button className="sign-up__form-btn main-btn">Sign Up</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
     );
}
 
export default SignUpPopup;