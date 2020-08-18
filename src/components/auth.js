import React, { Component } from 'react'
import '../styles/auth.css'
import SignIn from './signIn'
import SignUp from './signup'
import logo from '../Balanced.png'
import Circle from './circle'


export default class Home extends Component{
  // state = {
  //   signIn: true
  // }

  whichUserForm = () => {
    return !this.props.newUser ? <SignIn regClick={()=>this.goToNewUserForm()}/> : <SignUp/>
  }

  // goToNewUserForm = () => {
  //   const {signIn} = this.state
  //   this.setState({signIn:!signIn})
  // }

  render(){
    return(
      <div className='main-home'>
        <section className='left-home'>
          <div className='form-container'>
            {this.whichUserForm()}
          </div>
        </section>
        <section className='right-home' style={styles.imgPosition}>
          <h1 style={styles.headerPosition}>Let's Get Balanced.</h1>
          <div style={styles.imgWrapper}></div>
          <Circle
            size={100}
            color={styles.bubbleColor}
            top={false}
            left={false}
            vPosition={'45%'}
            hPosition={'-1%'}
          />
          <Circle
            size={100}
            color={styles.bubbleColor}
            top={false}
            left={false}
            vPosition={'35%'}
            hPosition={0}
          />
          <Circle
            size={100}
            color={styles.bubbleColor}
            top={false}
            left={false}
            vPosition={'25%'}
            hPosition={0}
          />
          <Circle
            size={100}
            color={styles.bubbleColor}
            top={false}
            left={false}
            vPosition={'26%'}
            hPosition={75}
          />
          <Circle
            size={100}
            color={styles.bubbleColor}
            top={false}
            left={false}
            vPosition={'22%'}
            hPosition={150}
          />
          <Circle
            size={100}
            color={styles.bubbleColor}
            top={false}
            left={false}
            vPosition={'24%'}
            hPosition={225}
          />
          <Circle
            size={100}
            color={styles.bubbleColor}
            top={false}
            left={false}
            vPosition={'20%'}
            hPosition={300}
          />
        </section>

      </div>
      
    )
  }
  
}

const styles = {
  imgWrapper: {
    backgroundImage: `url(${logo})`,
    flexGrow: 1,
    maxHeight: '30vh',
    maxWidth: '45vw',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    position: 'relative',
    visibility: 'visible',
  },
  imgPosition: {
    justifyContent: 'space-around',  
  },
  headerPosition: {
    textAlign: 'center',
    marginTop: '10vh'
  },
  bubbleColor: 'rgba(33,250,47,0.14)'
  
}