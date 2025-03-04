import React from 'react'
import Card from './card.component'

const CardContainer = () => {
    const items = [
        { id: 1, title: 'Item 1', description: 'Description 1' },
        { id: 2, title: 'Item 2', description: 'Description 2' },
        { id: 3, title: 'Item 3', description: 'Description 3' }
    ]

    return (
        <div className='card-container'>
            {items.map(({id, title, description}) => (
                <Card key={id} title={title} description={description} />
            ))}
        </div>
    )
}

export default CardContainer