import React from 'react'
import '../css/body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import playlogo from '../assets/old-play-store.svg'
import applelogo from '../assets/old-app-store.svg'
import SectionFirst from './bodyComponent/SectionFirst'
import SectionTwo from './bodyComponent/SectionTwo'
import SectionThree from './bodyComponent/SectionThree'
import SectionFour from './bodyComponent/SectionFour'
import SectionFive from './bodyComponent/SectionFive'
const Body = () => {
  return (
    <div className='body'>
        <div className='body-main'>
            <ul className='body-ul'>
                <li className='bodu-li'>
                    <div className='ul-div'>
                    Home
                    <FontAwesomeIcon icon={faAngleRight}  />
                    </div>
                </li>
                <li className='bodu-li'>
                    <div className='ul-div'>
                    Articles
                    <FontAwesomeIcon icon={faAngleRight}  />
                    </div>
                </li>
                <li className='bodu-li'>
                    <div className='ul-div'>
                    Why has Cipla share price declined 15% over the past month?
                    </div>
                </li>
            </ul>


            <div className='header-main'>
                <h1>Why has Cipla share price declined 15% over the past month?</h1>
                <span>
                    <p>Tue Mar 07 2023</p>
                    <p>Last updated: Thu Mar 09 2023</p>
                </span>


            <div className='head'>
                
                    <div className='Top'>
                       <SectionFirst/>
                       <SectionTwo />
                       <SectionThree/>
                       <SectionFour/>
                       <SectionFive/>
                    </div>
                    

                    {/* side-bar */}
                    <div className='head-sidebar'>
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
                                <p className='rating'><span className='bold '>4.7</span>/5</p>
                            </div>
                            <div className='store'>
                                <p>Excellent on <span className='bold'>Android</span></p>
                                <div className='play-store'>
                                    <img src={playlogo} alt='play-button'></img>
                                </div>
                                <span className='rating'>★★★★</span>
                                <p className='rating'><span className='bold '>4.4</span>/5</p>
                            </div>
                            
                        </ul>
                    </div>
                    </div>
            </div>
        
        </div>
        
    </div>
  )
}

export default Body