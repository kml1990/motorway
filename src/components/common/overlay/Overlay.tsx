/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import './Overlay.scss';

export interface OverlayProps {
    onClicked: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClicked, children }) => {
    return (
        <div className="Overlay" onClick={onClicked}>
            {children}
        </div>
    );
};

export default Overlay;
