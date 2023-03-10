import React from 'react'
import playlogo from '../../assets/old-play-store.svg'
import applelogo from '../../assets/old-app-store.svg'
const SideBar = () => {
  return (
    <div className='side-bar'>
        <ul className='head-ul'>
                <h3>Invest In</h3>
                    <li style={{backgroundColor:'rgb(250,234,234)'}} >INDstocks</li>
                    <li style={{backgroundColor:'#FDF0E3'}}>Mutual Funds</li>
                    <li style={{backgroundColor:'#E8F4FD'}}>FD</li>
                    <li style={{backgroundColor:'rgb(245,247,249)'}}>Health Insurance</li>
                    <li style={{backgroundColor:'#FCF8F3'}}>Life Insurance</li>
                    <li style={{backgroundColor:'#EBF4EC'}}>IPO</li>
            </ul>
            <ul className='download'>
                <h2>Download App</h2>
                <div className='store'>
                    <p>Excellent on <span className='bold'>Apple</span></p>
                    <div className='apple-store'>
                    <img src={applelogo} alt='apple-button'></img>
                    </div>
                    <span className='rating'>★★★★</span>
                    <p className='rating'><span className='bold '>4.0</span>/5</p>
                </div>
                <div className='store'>
                    <p>Excellent on <span className='bold'>Android</span></p>
                    <div className='play-store'>
                        <img src={playlogo} alt='play-button'></img>
                    </div>
                    <span className='rating'>★★★★</span>
                    <p className='rating'><span className='bold '>4.0</span>/5</p>
                </div>
                            
            </ul>
    </div>
  )
}

export default SideBar