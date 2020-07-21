import React, { Component } from 'react'
import '../styles/home.css'
import Circle from './circle'

export default class Home extends Component{
  render(){
    return(
      <div className='main-home'>
        <section className='left-home'>
          <h1 className='heading-text'>
            Peace. Ease. <span className="orange-text">Balanced.</span>
          </h1>
          <p className='desc-home'>
            Begin your path to a <span className='orange-text accent-text'>balanced</span> life and achieve financial 
            <span className='green-text accent-text'> freedom.</span>
          </p>
          <Circle
            size={214}
            color={'rgba(100,107,250,0.25)'}
            top={false}
            left={true}
            vPosition={50}
            hPosition={100}
          />
          <Circle
            size={150}
            color={'rgba(67,178,74,0.14)'}
            top={true}
            left={true}
            vPosition={30}
            hPosition={300}
          />
          <Circle
            size={300}
            color={'rgba(255,172,51,0.29)'}
            top={true}
            left={false}
            vPosition={25}
            hPosition={200}
          />
        </section>
        <section className='right-home'>
          <div className='img-wrapper'></div>
        </section>
        
      </div>
    )
  }
}