import React from 'react'

const Description = ({description}) => {
  return (
    <div className="description">
        <p>{description || 'No hay descripcion disponible.'}</p>
    </div>
  )
}

export default Description