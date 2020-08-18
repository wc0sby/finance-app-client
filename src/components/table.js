import React, { Component } from 'react'

export default class Table extends Component{
  getCategories(){
    const {user} = this.props
    if (user.categories){
      const filterArr = user.categories.filter(i=>i.isActive)
      return <ul>
        {
          filterArr.map((i,k)=>{
            return <li key={k}>{i.category}</li> 
          })
      }
      </ul> 
    }
  }
  render(){
    return(
      <div>
        <h3>{`Welcome ${this.props.user.name}!`}</h3>
        <h5>Below are your categories!</h5>
        {this.getCategories()}
      </div>
    )
  }
}