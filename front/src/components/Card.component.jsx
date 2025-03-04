import React from 'react'
import Description from './Description.component'

const Card = ({title, description}) => {
  return (
    <div className='card'>
        <h1 className="title">
            {title}
        </h1>
        <Description description={description} />
        <button type="button">Ir a cap</button>
    </div>
  )
}

export default Card