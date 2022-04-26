import React from 'react'

const Input = ({className,type,onChange,placeholder}) => {
  return (
    
    
        <form>
          <input
            className={className}
            placeholder={placeholder}
            onChange={onChange}
          />
        </form>
    
  )
}

export default Input
