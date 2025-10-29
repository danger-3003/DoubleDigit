import React from 'react'

function Button({ name, className, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {name}
      {icon && icon}
    </button>
  )
}

export default Button