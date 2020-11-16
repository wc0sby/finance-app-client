import React from 'react'

const handleButtonClick = (e) =>{
  return e.target.dataset.value
}

const DeleteButton = (props) => {
  return (
    <div style={{'display':'inLine'}} 
      data-value={props.itemKey}
      // onClick={(e)=>handleButtonClick(e)}
      onClick={(e,data)=>props.handleOnClick(e,props.itemKey)}
    >
      🗑 
    </div>
  )
}

export default DeleteButton