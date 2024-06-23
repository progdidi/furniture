import './modal.scss';

//components
import ModalContent from './ModalContent/ModalContent';
import LogOut from './logOut/logOut';
import CartMenu from './CartMenu/CartMenu';
import NewsletterModal from './NewsletterModal/NewsletterModal';



const Modal = ({showModal, setShowModal, activeModal, children}) => {

    

    return ( 
        <div className={showModal ? "modal active" : "modal"} onClick={() => setShowModal(false)}>
            <div className={showModal ? "modal-content active" : "modal-content"} onClick={(e) => e.stopPropagation()}>

                <button className="close-btn" onClick={() => setShowModal(false)}>X</button>

                {children}

                <ModalContent id="logout" activeModal={activeModal}>
                    <LogOut/>
                </ModalContent>

                <ModalContent id="cart" activeModal={activeModal}>
                    <CartMenu/>
                </ModalContent>

                <ModalContent id="newsletter" activeModal={activeModal}>
                    <NewsletterModal/>
                </ModalContent>

                
            </div>
        </div>
     );
}
 
export default Modal;