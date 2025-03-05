import React from 'react'

const Genres = ({ generos }) => {
  const generosArray = generos.split(',');

  return (
    <div className='badge-container'>
      {generosArray.map((genero, index) => (
        <span key={index} className='badge'>
          {genero.trim()}
        </span>
      ))}
    </div>
  );
}

export default Genres