import React from 'react'

function ImageProfile(props) {
  return (
    <div className="imageProfile">
      <img src={props.images} alt="" />
    </div>

  )
}

export default ImageProfile