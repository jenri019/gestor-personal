import React from 'react';
import '../styles/Popup.css';

const renderCreateContent = () => (
    <div>
        <h2>Crear Nuevo Elemento</h2>
        {/* Aquí puedes añadir el formulario o contenido para crear */}
        <form>
            <label>
                Nombre:
                <input type="text" name="name" />
            </label>
            <button type="submit">Crear</button>
        </form>
    </div>
);

const renderEditContent = () => (
    <div>
        <h2>Editar Elemento</h2>
        {/* Aquí puedes añadir el formulario o contenido para editar */}
        <form>
            <label>
                Nombre:
            </label>
            <input type="text" name="name" defaultValue="" />

            <label>
                Descripcion:
            </label>
            <input type="text" name="name" defaultValue="" />
            
            <label>
                URL:
            </label>
            <input type="text" name="name" defaultValue="" />
            
            <label>
                URL:
            </label>
            <input type="text" name="name" defaultValue="" />

            <button type="submit">Guardar</button>
        </form>
    </div>
);


const Popup = ({ show, onClose, children, isCreate = false }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                {isCreate ? renderCreateContent() : renderEditContent()}
                {children}
            </div>
        </div>
    );
};

export default Popup;