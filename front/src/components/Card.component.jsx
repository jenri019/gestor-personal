import React from 'react'
import Description from './Description.component'
import Genres from './Genres.component'

const Card = ({title, current_chapter, description, generos, onButtonClick}) => {
  return (
    <div className='card'>
        <h1 className="title">
            {title} ({current_chapter})
        </h1>
        <Description description={description} />
        <Genres generos={generos} />
        <button type="button" className='btn btn-primary' onClick={onButtonClick}>Ir a cap</button>
    </div>
  )
}

export default Card