import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUserData} from '../redux/fetch/getUserDataFetch'
import { getProductsError, getUserData, getUserDataPending } from '../redux/reducers/UserDataReducer'
import { bindActionCreators } from 'redux'

import {decodeToken} from '../helpers/actions/getUserData'

class Table extends Component{

  componentDidMount() {
    const {fetchUserData} = this.props
    const token = document.cookie
    if (document.cookie){
      const tokenData = decodeToken(token)
    fetchUserData(tokenData._id, 'categories')
    }
  }

  getCategories(status, userData){
    // const {user} = this.props
    if (!status && userData['categories']){
      console.log(userData['categories'])
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
  error: state.userData.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table)