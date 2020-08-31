import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUserData} from '../redux/fetch/getUserDataFetch'
import {createEntry} from '../redux/actions/transactionActions'

import {decodeToken} from '../helpers/actions/getUserData'

class Table extends Component{

  componentDidMount() {
    const {fetchUserData} = this.props
    const token = document.cookie
    if (document.cookie){
      const tokenData = decodeToken(token)
    fetchUserData(tokenData._id, 'categories')
  }
  this.props.updateEntries({id:'112',itemName:'test'})
  }

  getCategories(status, userData, strName){
    if (!status && userData){
      const filterArr = userData.filter(i=>i.isActive)
      return <ul>
        {
          filterArr.map((i,k)=>{
            return <li key={k}>{i[strName]}</li> 
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
      <div>
        <h3>{`Welcome ${userData.firstName}!`}</h3>
        <h5>Below are your categories!</h5>
        {/* Remove when the table is built. Render list of categories...just to test */}
        {this.getCategories(loading, categories, 'category')}
        <h5>These are some entries</h5>
        {this.getCategories(loading, entries, 'name')}
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
    updateEntries: (data)=>dispatch(createEntry(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)