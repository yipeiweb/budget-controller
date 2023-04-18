import React from 'react'

const Message = ({children, messageType}) => {
  return (
    <div className={`alerta ${messageType}`}>
        {children}
    </div>
  )
}

export default Message