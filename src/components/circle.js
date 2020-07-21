import React, { Component } from 'react'

export default class Circle extends Component{
  render(){
    return(
      <div style={circleStyle(this.props)}>
        
      </div>
    )
  }
}

const circleStyle = (props)=>{
  return(
    {
      width: props.size,
      height: props.size,
      backgroundColor: props.color,
      borderRadius: '50%',
      top: props.top ? props.vPosition : null,
      left: props.left ? props.hPosition : null,
      bottom: !props.top ? props.vPosition : null,
      right: !props.left ? props.hPosition : null,
      position: 'absolute'
    }
  )
}