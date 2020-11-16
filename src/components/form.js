import React, { Component } from 'react'
import {connect} from 'react-redux'
import { postCategoryData } from '../redux/fetch/postCategoryFetch'
import '../styles/dashboard.css'

// import { formUpdate } from '../helpers/functionFactory'

class EntryForm extends Component{
  state = {
    formData:{
      category: '',
      isActive: true
    }
  }

  formUpdate(e, formValue, stateName){
    const formData = {...this.state[stateName]}
    formData[formValue] = e.target.value
    this.setState({[stateName]: formData})
  }

  handleSubmit(e){
    e.preventDefault()
    return this.state.formData.category ? this.props.updateEntries(this.props.userData._id, this.state.formData) : null
  }

  render(){
    return(
      <div>
        <form >
          <label forhtml='cat_name'>Category Name</label>
          <input type="text" id='cat_name' name='category' placeholder='new category' onChange={(e)=>this.formUpdate(e, 'category', 'formData')} value={this.state.formData.category}/>
        </form>

          <div className='dashboard-button' onClick={(e)=>this.handleSubmit(e)}>Add Category</div> 

      </div>
    )
  }
}

const MSP = state => {
  const {formValue} = state.auth
  const {userData} = state.userData
  return ({
    formValue,
    userData
  })
}

const MDP = dispatch => {
  return {
    updateEntries: (id, data)=>dispatch(postCategoryData(id, data))
  }
}

export default connect(MSP, MDP)(EntryForm)