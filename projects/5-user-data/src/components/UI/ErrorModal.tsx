import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../Modal/Backdrop';
import Modal from '../Modal/Modal';
interface ErrorModalProps {
   title: string;
   message: string;
   onClick?: React.ReactEventHandler;
}

const ErrorModal = (props: ErrorModalProps) => {
   return (
      <>
         {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById('backdrop-root')!
         )}
         {ReactDOM.createPortal(
            <Modal
               title={props.title}
               message={props.message}
               onClick={props.onClick}
            />,
            document.getElementById('modal-root')!
         )}
      </>
   );
};

export default ErrorModal;
