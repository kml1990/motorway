import React from 'react';
import Overlay from '../overlay/Overlay';

import './Modal.scss';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay onClicked={onClose}>
            <div className="Modal">
                <div className="Modal__body">{children}</div>
            </div>
        </Overlay>
    );
};

export default Modal;
