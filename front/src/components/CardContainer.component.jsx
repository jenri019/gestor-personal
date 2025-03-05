import React from 'react'
import Card from './card.component'

const handleButtonClick = (url) => {
    window.open(url, '_blank');
}

const CardContainer = ({ items }) => {
    return (
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
    )
}

export default CardContainer