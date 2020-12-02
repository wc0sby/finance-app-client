import React from 'react'

const DeleteButton = (props) => {
  return (
    <div style={{'display':'inLine'}} 
      data-value={props.itemKey}
      onClick={(e,data)=>props.handleOnClick(e,props.itemKey)}
    >
      🗑 
    </div>
  )
}

export default DeleteButton