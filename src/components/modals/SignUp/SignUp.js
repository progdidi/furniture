import sign from './sign.png';
import './signUp.scss';

const SignUp = ({showSignUp}) => {
    return ( 
        <section className={showSignUp ? "sign-up active" : "sign-up"}>
            <div className="container-fluid">
                <div className="sign-up__inner">
                    <div className="sign-up__media">
                        <p className="sign-up__media-text">3legant.</p>
                        <img src={sign} alt="" className="sign-up__media-img" />
                    </div>
                    <div className="sign-up__info">

                        <div className="sign-in__modal">
                            <h4 className="sign-up__info-title section__title">Sign In</h4>
                            <p className="sign-up__info-text">Don’t have an accout yet? <a href="" className="sign-up__info-link">Sign Up </a></p>
                            <form action="" className="sign-up__form">
                                <input type="text" className="sign-up__form-input" placeholder='Your usernam or email address'/>
                                <input type="text" className="sign-up__form-input password" placeholder='Password'/>
                                <label htmlFor="" className="sign-up__form-label">
                                    <input type="checkbox" className="sign-up__form-input" />
                                <span>Remember me</span> 
                                </label>

                                <button className="sign-in__modal-btn">Forgot password?</button>

                                <button className="sign-up__form-btn main-btn">Sign In</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
     );
}
 
export default SignUp;