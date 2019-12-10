import React from 'react';
import propTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return(
    <li>
      {tech}
      <button 
        type="button" 
        onClick={onDelete}
      >Remover</button>
    </li>
  )
}

TechItem.defaultProps ={
  tech: "Oculto",
}

TechItem.propTypes ={
  tech: propTypes.string,
  onDelete: propTypes.func.isRequired
}

export default TechItem;