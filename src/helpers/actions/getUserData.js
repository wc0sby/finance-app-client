import * as JWT from 'jwt-decode'

export const decodeToken = (token) => {
  const information = JWT(token)
  return information
}

export const getUserData = (id, option) => {
  const url = `http://localhost:3001/users/${id}`
  return fetch(url)
  .then(res=>res.json())
  .then(
    data=>{
      return data[option].map(i=>i)
    },
    reject=>console.log(reject)
    )
}
