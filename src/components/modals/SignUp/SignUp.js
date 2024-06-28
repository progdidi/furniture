import sign from './sign.png';
import './signUp.scss';
import { useState } from 'react';

const SignUp = ({showSignUp, setShowSignup}) => {

    const [showSignIn, setShowSignIn] = useState(false);

    return ( 
        <section className={showSignUp ? "sign-up active" : "sign-up"}>
            <div className="container-fluid">
                <div className="sign-up__inner">
                    <div className="sign-up__media">
                        <p className="sign-up__media-text">3legant.</p>
                        <img src={sign} alt="" className="sign-up__media-img" />
                    </div>
                    <div className="sign-up__info">
                        <button className="sign-up__close-btn">X</button>

                        <div className={showSignIn ? "sign-in__modal active" : "sign-in__modal"}>
                            <h4 className="sign-up__info-title section__title">Sign In</h4>
                            <p className="sign-up__info-text">Don’t have an accout yet? <button className="sign-up__info-link" onClick={() => {
                                setShowSignIn(false);
                                setShowSignup(true);
                            }}>Sign Up </button></p>
                            <form action="" className="sign-up__form">
                                <input type="text" className="sign-up__form-input" placeholder='Your usernam or email address'/>
                                <input type="text" className="sign-up__form-input password" placeholder='Password'/>

                                <div className="sign-up__form-password">
                                    <label htmlFor="" className="sign-up__form-label">
                                        <input type="checkbox" className="sign-up__form-input" />
                                    <span>Remember me</span> 
                                    </label>

                                    <button className="sign-up__form-link">Forgot password?</button>
                                </div>
                                

                                <button className="sign-up__form-btn main-btn">Sign In</button>
                            </form>
                        </div>

                        <div className={showSignUp ? "sign-up__modal active" : "sign-up__modal"}>
                            <h4 className="sign-up__info-title section__title">Sign up</h4>
                            <p className="sign-up__info-text">Already have an account? <button className="sign-up__info-link" onClick={() => {
                                setShowSignIn(true);
                                setShowSignup(false);
                                }}>Sign in </button></p>
                            <form action="" className="sign-up__form">
                                <input type="text" className="sign-up__form-input" placeholder='Your name'/>
                                <input type="text" className="sign-up__form-input" placeholder='Username'/>
                                <input type="mail" className="sign-up__form-input" placeholder='Email address'/>
                                <input type="text" className="sign-up__form-input password" placeholder='Password'/>

                                <div className="sign-up__form-password">
                                    <label htmlFor="" className="sign-up__form-label">
                                        <input type="checkbox" className="sign-up__form-input" />
                                    <span>I agree with <a href="" className="sign-up__form-link">Privacy Policy</a>  and <a href="" className="sign-up__form-link">Terms of Use</a></span> 
                                    </label>

                                </div>

                                <button className="sign-up__form-btn main-btn">Sign Up</button>
                            </form>
                        </div>
                        
                    </div>

                    
                </div>
                
            </div>
        </section>
     );
}
 
export default SignUp;