import './logOut.scss';

const LogOut = () => {
    return ( 
        <div className="log-out">
            <p className="log-out__text">Are you sure you want to log out?</p>
            <button className="log-out__btn main-btn">Log out</button>
        </div>
     );
}
 
export default LogOut;