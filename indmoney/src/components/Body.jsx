import React from 'react'
import '../css/body.css'
import medium from '../assets/medium.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
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
                 <img style={{marginTop:'2vh'}} src={medium}></img>
                 <ul className='head-ul'>
                    <h3>Invest In</h3>
                        <li>IndStocks</li>
                        <li>Mutual Funds</li>
                        <li>FD</li>
                        <li>Health Insurance</li>
                        <li>Life Insurance</li>
                        <li>IPO</li>
                </ul>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Body