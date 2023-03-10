import React from 'react'
import '../css/footer.css'
import white from '../assets/white.png'
import playlogo from '../assets/old-play-store.svg'
import applogo from '../assets/old-app-store.svg'

const Footer = () => {
  return (
    <div className='body footer'>
        <div className='bottom'>
            <div className='footer-top'>
                <div className='left'>
                  <img className='logo' src={white} alt="logo"/>
                  <div className='left-buttons'>
                    <img src={playlogo} alt='play-button'></img>
                    <img src={applogo} alt='play-button'></img>
                  </div>
                </div>
                <div className='right'>
                  <h1>second</h1>
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Footer