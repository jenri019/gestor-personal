import React from 'react'
import Card from './card.component'

const CardContainer = ({items}) => {
    return (
        <div className='card-container'>
            {items.map(({id, title, description, generos}) => (
                <Card key={id} title={title} description={description} generos={generos} />
            ))}
        </div>
    )
}

export default CardContainer