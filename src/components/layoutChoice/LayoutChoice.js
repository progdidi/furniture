import './layoutChoice.scss';

//images
import view1 from './view1.svg';
import view2 from './view2.svg';
import view3 from './view3.svg';
import view4 from './view4.svg';

const LayoutChoice = () => {
    return ( 
            <div className="layout-choice">
                  <button className="layout-choice__btn">
                    <img src={view1} alt="" className="layout-choice__btn-img" />
                  </button>
                  <button className="layout-choice__btn active">
                    <img src={view2} alt="" className="layout-choic__-btn-img" />
                  </button>
                  <button className="layout-choice__btn">
                    <img src={view3} alt="" className="layout-choice__btn-img" />
                  </button>
                  <button className="layout-choice__btn">
                    <img src={view4} alt="" className="layout-choice__btn-img" />
                  </button>
            </div>
     );
}
 
export default LayoutChoice;