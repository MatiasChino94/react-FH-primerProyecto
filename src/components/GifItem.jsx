import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  
  return (
    <div className="card">
      <img src={url} alt="title" />
      <p>{title}</p>
    </div>
  )
}

/* TAREA

1. Añadir Proptyopes
  a- title obligatorio
  b- url obligatorio

2. Evaluar el snapshot

*/

GifItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}