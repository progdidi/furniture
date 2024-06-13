import './counter.scss';

const Counter = () => {
    return ( 
        <div className="counter">
            <button className="counter-btn minus">-</button>
            <p className="counter-amount">1</p>
            <button className="counter-btn plus">+</button>
        </div>
     );
}
 
export default Counter;