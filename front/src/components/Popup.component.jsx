import React from 'react';
import '../styles/Popup.css';

const Popup = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>Cancelar</button>
                {children}
            </div>
        </div>
    );
};

export default Popup;