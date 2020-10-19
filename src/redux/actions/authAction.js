export const fetchAuthBegin = () => ({
  type: "FETCH_AUTH"
})

export const fetchAuthSuccess = (data) => ({
  type: "FETCH_AUTH_SUCCESS",
  payload: {data}
})

export const fetchAuthFailure= (error) => ({
  type: "FETCH_AUTH_FAILURE",
  payload: {error}
})

export const signOut = () => ({
  type: "SIGNOUTACTION"
})