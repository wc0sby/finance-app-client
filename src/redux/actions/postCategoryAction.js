export const FETCH_CATEGORYDATA_BEGIN = 'FETCH_CATEGORYDATA_BEGIN'
export const FETCH_CATEGORYDATA_SUCCESS = 'FETCH_CATEGORYDATA_SUCCESS'
export const FETCH_CATEGORYDATA_FAILURE = 'FETCH_CATEGORYDATA_FAILURE'

export const fetchCategoryDataBegin = () => ({
  type: FETCH_CATEGORYDATA_BEGIN
})

export const fetchCategoryDataSuccess = (data) => ({
  type: FETCH_CATEGORYDATA_SUCCESS,
  payload: {data}
})

export const fetchCategoryDataFailure= (error) => ({
  type: FETCH_CATEGORYDATA_FAILURE,
  payload: {error}
})