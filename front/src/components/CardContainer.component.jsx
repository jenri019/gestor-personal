import React, { useState } from 'react'
import Card from './card.component'
import Popup from './Popup.component';

const handleButtonClick = (url) => {
    window.open(url, '_blank');
}

const CardContainer = ({ items }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <button onClick={handleShowPopup}>Agregar</button>
            <Popup show={showPopup} onClose={handleClosePopup}>
                <h2>Contenido del Popup</h2>
                <p>Este es el contenido del popup.</p>
            </Popup>
            <div className='card-container'>
                {items.map(({ id, title, current_chapter, description, generos, url }) => (
                    <Card
                        key={id}
                        title={title}
                        description={description}
                        generos={generos}
                        current_chapter={current_chapter}
                        onButtonClick={() => handleButtonClick(url)}
                    />
                ))}
            </div>
        </>
    )
}

export default CardContainer