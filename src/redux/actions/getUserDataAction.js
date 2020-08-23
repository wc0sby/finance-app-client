export const FETCH_USERDATA_BEGIN = 'FETCH_USERDATA_BEGIN'
export const FETCH_USERDATA_SUCCESS = 'FETCH_USERDATA_SUCCESS'
export const FETCH_USERDATA_FAILURE = 'FETCH_USERDATA_FAILURE'

export const fetchUserDataBegin = () => ({
  type: FETCH_USERDATA_BEGIN
})

export const fetchUserDataSuccess = (data) => ({
  type: FETCH_USERDATA_SUCCESS,
  payload: {data}
})

export const fetchUserDataFailure= (error) => ({
  type: FETCH_USERDATA_FAILURE,
  payload: {error}
})