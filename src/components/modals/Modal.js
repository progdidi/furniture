import './modal.scss';
import { useState } from 'react';

const Modal = ({showModal, setShowModal}) => {

    

    return ( 
        <div className={showModal ? "modal active" : "modal"}>
            <div className="modal-content">
                <button className="close-btn" onClick={() => setShowModal(false)}>X</button>

                <p className="modal-text">Are you sure you want to log out?</p>

                <button className="modal-btn main-btn">Log out</button>
            </div>
        </div>
     );
}
 
export default Modal;