import {
  fetchCategoryDataBegin,
  fetchCategoryDataSuccess,
  fetchCategoryDataFailure,
} from '../actions/postCategoryAction'

const fetchHeaderBuilder = (obj) => {
  let headersForFetch = {
    method: 'post',
    headers: {
      'Content-Type':'application/json',
      'auth-token': document.cookie
    },
    body: JSON.stringify(obj)
  }
  return headersForFetch
}

export const postCategoryData = (id, postData) => {
  const url = `http://localhost:3001/categories/${id}`
  return dispatch => {
    //initiate fetchUserDataBegin Action
    dispatch(fetchCategoryDataBegin())
    //get headers
    const fetchHeader = fetchHeaderBuilder(postData)
    //try to fetch...
    fetch(url, fetchHeader)
    .then(res=>res.json())
    .then(
      data=>{
        const {password, ...objWithoutPassword} = data
        if (data.error){
          //throw error and go to catch
          throw(data.error)
        }
        //If we are here, we have success
        //initiate fetchUserDataSuccess action
        console.log(objWithoutPassword)
        dispatch(fetchCategoryDataSuccess(objWithoutPassword))
        return objWithoutPassword
      })
      .catch(reject=>{
        //if we are here, we have an error
        //initiate the error action
        dispatch(fetchCategoryDataFailure(reject))
      }
    )
  }
}


