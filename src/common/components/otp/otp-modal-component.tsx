import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { createPortal } from 'react-dom';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export default function OtpModalComponent({props}){
  let subtitle;
  
  //const [modalIsOpen, setIsOpen] = React.useState(false);

  /*function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  */


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  

  return (
  	<div>
      <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel={props.contentLabel}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.contentLabel}</h2>
        <button onClick={props.closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  /*  <div>
      <button onClick={openModal}>Open Modal</button>
      {modalIsOpen && createPortal(
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>,document.body)}
    </div>*/
  );
}
