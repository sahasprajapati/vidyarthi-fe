import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'assets/svg/Icon';
import MainHeading from 'components/main-heading';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  title: string;
  modalClose: () => void;
}

const Modal: React.FC<Props> = ({ title, children, modalClose, onClick }) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="overlay__modal" onClick={modalClose} />
      <div className="modal__container mx-3">
        <div className="flex-between">
          <MainHeading title={title} />
          <div className="pointer" onClick={onClick}>
            <Icon name="cross" />
          </div>
        </div>
        <div className="my-3">{children}</div>
      </div>
      <div className="border-bottom" />
    </React.Fragment>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
