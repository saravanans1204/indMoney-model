import React from 'react'
import '../css/body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import SectionFirst from './bodyComponent/SectionFirst'
import SectionTwo from './bodyComponent/SectionTwo'
import SectionThree from './bodyComponent/SectionThree'
import SectionFour from './bodyComponent/SectionFour'
import SectionFive from './bodyComponent/SectionFive'
import SideBar from './bodyComponent/SideBar'


    

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
                        <SideBar/>
                    </div>
                    </div>
            </div>
        
        </div>
        
    </div>
  )
}

export default Body