import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUserData} from '../redux/fetch/getUserDataFetch'
import {createEntry} from '../redux/actions/transactionActions'
import {deleteCategoryData} from '../redux/fetch/deleteCategoryFetch'
import {decodeToken} from '../helpers/actions/getUserData'

import Entry from './form'
import '../styles/dashboard.css'
import Delete from './deleteButton'

class Table extends Component{

  componentDidMount() {
    const {fetchUserData} = this.props
    const token = document.cookie
    if (token !== 'null' && token.length !== 0){
      const tokenData = decodeToken(token)
      fetchUserData(tokenData._id)
  }
}

  handleDeleteClick(data){
    const newData = data
    newData.isActive = !newData.isActive
    this.props.deleteEntries(this.props.userData._id, newData._id, newData)
  }

  getCategories(status, userData, strName){
    if (!status && userData){
      const filterArr = userData.filter(i=>i.isActive)
      return <ul>
        {
          filterArr.map((i)=>{
            return (
              <div key={i._id}>
                <span><Delete itemKey={i} handleOnClick={(e,data)=>this.handleDeleteClick(data)}/> </span>
                <span>{i[strName]} </span>
              </div> 
            )
          })
      }
      </ul> 
    }
  }
  render(){
    const {error, loading, userData, categories, entries} = this.props

    if (error) {
      return <div>Error: {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return(
      <div className='dashboard-layout'>
        <div className='dashboard-list'>
          <h3>{`Welcome ${userData.firstName}!`}</h3>
          <h5>Below are your categories!</h5>
          {/* Remove when the table is built. Render list of categories...just to test */}
          {this.getCategories(loading, categories, 'category')}
          <h5>These are some entries</h5>
          {this.getCategories(loading, entries, 'name')}
        </div>
        <div className='dashboard-form'>
          <Entry userid={userData._id}/>
        </div>
      </div>
    )
  }
}

//connect store (state) keys to component --> which key does this component need?
const mapStateToProps = state => {
  const {userData, loading, error, entries, categories} = state.userData
  return (
    {
      userData,
      loading,
      error,
      entries,
      categories
    }
  )
}

const mapDispatchToProps = dispatch => {
  return{
    fetchUserData: (token, type)=>dispatch(fetchUserData(token, type)),
    updateEntries: (data)=>dispatch(createEntry(data)),
    deleteEntries: (id, catId, data)=>dispatch(deleteCategoryData(id, catId, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)