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

  getCategories(status, userData){
    if (!status && userData['categories']){
      const filterArr = userData['categories'].filter(i=>i.isActive)
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
    const {error, loading, items} = this.props

    if (error) {
      return <div>Error: {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <h3>{`Welcome ${items.firstName}!`}</h3>
        <h5>Below are your categories!</h5>
        {this.getCategories(loading, items)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.userData.items,
  loading: state.userData.loading,
  error: state.userData.error,
  entries: state.transactionData
})

const mapDispatchToProps = dispatch => {
  return{
    fetchUserData: (token, type)=>dispatch(fetchUserData(token, type)),
    updateEntries: (data)=>dispatch(createEntry(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)