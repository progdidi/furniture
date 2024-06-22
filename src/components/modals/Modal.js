import './modal.scss';
import { useState } from 'react';

const Modal = ({showModal}) => {

    

    return ( 
        <div className={showModal ? "modal active" : "modal"}>
            <div className="overlay">
                <div className="modal-content">
                    <button className="close-btn">X</button>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;