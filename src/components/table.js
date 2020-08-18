import React, { Component } from 'react'

export default class Table extends Component{
  getCategories(){
    const {user} = this.props
    if (user.categories){
      return <ul>
        {
          user.categories.map((i,k)=>{
            return <li key={k}>{i.category}</li>
          })
      }
      </ul> 
    }
  }
  render(){
    return(
      <div>
        You are authenticated!
        {this.getCategories()}
      </div>
    )
  }
}