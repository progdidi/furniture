import './accountInfo.scss';

const AccountInfo = () => {
    return ( 
        <div className="account-info">
           
            <form action="" className="account-info__form">
                <fieldset className="account-info__form-fieldset">
                    <h5 className="account__title">Account Details</h5>
                    <label htmlFor="" className="account-info__form-label form-label">First name *
                        <input type="text" className="account-info__form-input form-input" placeholder='First name'/>
                    </label>
                    <label htmlFor="" className="account-info__form-label form-label">last name *
                        <input type="text" className="account-info__form-input form-input" placeholder='Last name'/>
                    </label>
                    <label htmlFor="" className="account-info__form-label form-label">Display name *
                        <input type="text" className="account-info__form-input form-input" placeholder='Display name'/>
                    </label>
                    <label htmlFor="" className="account-info__form-label form-label">Email *
                        <input type="text" className="account-info__form-input form-input" placeholder='Email'/>
                    </label>
                </fieldset>

                <fieldset className="account-info__form-fieldset">
                    <h5 className="account__title">Password</h5>
                    <label htmlFor="" className="account-info__form-label form-label">Old password
                        <input type="text" className="account-info__form-input form-input" placeholder='Old password'/>
                    </label>
                    <label htmlFor="" className="account-info__form-label form-label">new password
                        <input type="text" className="account-info__form-input form-input" placeholder='New password'/>
                    </label>
                    <label htmlFor="" className="account-info__form-label form-label">rEPEAT NEW PASSWORD
                        <input type="text" className="account-info__form-input form-input" placeholder='Repeat new password'/>
                    </label>
                   
                </fieldset>

                <button type="submit" className="account-info__form-btn main-btn">Save changes</button>
                
            </form>
        </div>
     );
}
 
export default AccountInfo;