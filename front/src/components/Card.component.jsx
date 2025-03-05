import React from 'react'
import Description from './Description.component'
import Genres from './Genres.component'

const Card = ({title, description, generos}) => {
  return (
    <div className='card'>
        <h1 className="title">
            {title}
        </h1>
        <Description description={description} />
        <Genres generos={generos} />
        <button type="button" className='btn btn-submit'>Ir a cap</button>
    </div>
  )
}

export default Card