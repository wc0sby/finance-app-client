import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUserData} from '../redux/fetch/getUserDataFetch'
import {createEntry} from '../redux/actions/transactionActions'
import {deleteCategoryData} from '../redux/fetch/deleteCategoryFetch'
import {decodeToken} from '../helpers/actions/getUserData'
import Delete from './deleteButton'
import DenseTable from './material-table'

import '../styles/dashboard.css'

class Dashboard extends Component{
  componentDidMount() {
    const {fetchUserData} = this.props
    const token = document.cookie
    if (token !== 'null' && token.length !== 0){
      const tokenData = decodeToken(token)
      fetchUserData(tokenData._id)
    }
  }

  handleDeleteClick(data, path){
    const newData = data
    newData.isActive = !newData.isActive
    this.props.deleteEntries(this.props.userData._id, newData._id, newData, path)
  }

  getHeaders(){
    return (
    // <div style={{'display':'grid'}}>
      <div style={{'gridColumn':'1 / span 4', 'display':'flex', 'justifyContent':'space-around'}}>
        <div></div>
        <div>Name</div>
        <div>Budget Amt</div>
        <div>Actual Amt</div>
        <div>Variance</div>
        <div>Month</div>
        <div>Year</div>
      </div> 
    // </div>
    )
  }

  getCategories(status, userData, strName, path){
    if (!status && userData){
      const filterArr = userData.filter(i=>i.isActive)
      return <div style={{'display':'grid'}}>
        <DenseTable data={filterArr}/>
      </div> 
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
      <div className={'dashboard-grid'}>
        <div className='item-c'>hi</div>
        <div className='item-c2'>hi</div>
        <div className='item-c3'>
        {/* <div className='table-header'>{this.getHeaders()}</div> */}
        <div className='table-main'>{this.getCategories(loading, entries, 'name', 'entries') }</div>
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
    deleteEntries: (id, catId, data, path)=>dispatch(deleteCategoryData(id, catId, data, path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)