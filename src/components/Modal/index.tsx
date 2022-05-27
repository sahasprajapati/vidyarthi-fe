import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Icon from 'assets/svg/Icon';

interface Props {
  open: boolean;
  onClick: () => void;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<Props> = ({ title, onClick, children }) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="overlay__modal" />
      <div className="modal__container">
        <div className="flex-between">
          <h6>{title}</h6>
          <div className="" onClick={onClick}>
            <Icon name="cross" />
          </div>
        </div>
      </div>
      {children}
      <div className="border-bottom" />
    </React.Fragment>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
