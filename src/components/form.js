import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createEntry } from '../redux/actions/transactionActions'
import '../styles/dashboard.css'

// import { formUpdate } from '../helpers/functionFactory'

class EntryForm extends Component{
  state = {
    formData:{
      category: ''
    }
  }

  formUpdate(e, formValue, stateName){
    const formData = {...this.state[stateName]}
    formData[formValue] = e.target.value
    this.setState({[stateName]: formData})
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <form >
          <label forhtml='cat_name'>Category Name</label>
          <input type="text" id='cat_name' name='category' placeholder='new category' onChange={(e)=>this.formUpdate(e, 'category', 'formData')} value={this.state.formData.category}/>

          <div className='dashboard-button' onClick={()=>this.props.updateEntries(this.state.formData)}>Add Category</div> 

        </form>
      </div>
    )
  }
}

const MSP = state => {
  const {formValue} = state.auth
  return ({
    formValue
  })
}

const MDP = dispatch => {
  return {
    updateEntries: (data)=>dispatch(createEntry(data))
  }
}

export default connect(MSP, MDP)(EntryForm)