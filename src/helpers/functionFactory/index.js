export const formUpdate=(e, formValue, stateName)=>{
  console.log(this)
  const formData = {...this.state[stateName]}
  formData[formValue] = e.target.value
  this.setState({[stateName]: formData})
}