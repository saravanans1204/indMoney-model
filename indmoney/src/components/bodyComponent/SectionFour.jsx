import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown,faCaretUp} from '@fortawesome/free-solid-svg-icons'

const SectionFour = () => {

  const [dropOne,setDropOne]=useState(false)
  const [dropTwo,setDropTwo]=useState(false)
  const [dropThree,setDropThree]=useState(false)

  const dropClickOne=()=>{
    setDropOne(!dropOne)
  }

  const dropClickTwo=()=>{
    setDropTwo(!dropTwo)
  }
  const dropClickThree=()=>{
    setDropThree(!dropThree)
  }
  return (
    <div className='fourth-section'>
    <h1>Cipla share price : Reasons for decline</h1>
    <p><span>Motilal Oswal:</span> The top domestic brokerage has a Neutral rating on the stock with a price target of Rs 990. The firm has highlighted heightened regulatory risks and the company's recent weak quarterly performance as concerns for the company.</p>
    
     <p><span>Prabudas Lilladher:</span> The renowned brokerage has a Buy rating on the stock with a price target of Rs 1,070. The firm has cited the share price is comfortably valued and the risk-reward scenario remains favorable in the near future. However, regulatory concerns and delay in product launches remain concerns.</p>
     <p style={{fontStyle:'italic'}}>This is not investment advice. Investments in the securities market are subject to market risk, read all the related documents carefully before investing. Past performance is not indicative of future returns.</p>


     <div className='drop-down'>
        <span className='down' onClick={dropClickThree}>
          <p>{dropThree?'As of 6th March 2023, the Cipla share price closed at Rs 880.':'What is Cipla share price?'}</p>
          <FontAwesomeIcon  icon={dropThree?faCaretDown:faCaretUp}/>
        </span>
        <span className='down' onClick={dropClickTwo}>
            <p>{dropTwo?"The Cipla share price is falling because of US regulator observations, delay in product launches, and weak results for the Oct-Dec 22 period.":'Why is Cipla share price falling?'}</p>
            <FontAwesomeIcon  icon={dropTwo?faCaretDown:faCaretUp}/>
        </span>
        <span className='down' onClick={dropClickOne}>
            <p>{dropOne?"Motilal Oswal -  Rs 990,Prabhudas Lilladher - Rs 1,070":'What is Cipla target price?'}</p>
            <FontAwesomeIcon  icon={dropOne?faCaretDown:faCaretUp}/>
        </span>
      </div>
</div>
  )
}

export default SectionFour