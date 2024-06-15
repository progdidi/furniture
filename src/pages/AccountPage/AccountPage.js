import './accountPage.scss';

const AccountPage = () => {
    return ( 
        <section className="account-page">
            <div className="container">
                <h4 className="account-page__title page__title">My Account</h4>
                <div className="account-page__inner">
                    <nav className="account-page__menu"></nav>
                    <div className="account-page__info"></div>
                </div>
            </div>
        </section>
     );
}
 
export default AccountPage;