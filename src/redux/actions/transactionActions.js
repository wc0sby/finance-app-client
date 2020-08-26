export const GET_TRANSACTIONS = 'GET_TRANSACTIONS'
export const CREATE_NEW_TRANSACTION = 'CREATE_NEW_TRANSACTION'

export const createEntry = (data) => ({
  type: CREATE_NEW_TRANSACTION,
  payload: {data}
})

export const getEntry = (data) => ({
  type: GET_TRANSACTIONS,
  payload: data
})