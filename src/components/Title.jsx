import React from 'react'

function Title(props) {
  return (
    <div className="titlePort">
        <h2> {props.title}</h2>
        {props.children}
    </div>
  )
}

export default Title