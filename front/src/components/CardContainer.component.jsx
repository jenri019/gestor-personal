import React from 'react'
import Card from './card.component'

const CardContainer = ({items}) => {
    console.log(items)
    return (
        <div className='card-container'>
            {items.map(({id, title, description}) => (
                <Card key={id} title={title} description={description} />
            ))}
        </div>
    )
}

export default CardContainer