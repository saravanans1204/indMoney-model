import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const SectionFour = () => {
  return (
    <div className='fourth-section'>
    <h1>Cipla share price : Reasons for decline</h1>
    <p><span>Motilal Oswal:</span> The top domestic brokerage has a Neutral rating on the stock with a price target of Rs 990. The firm has highlighted heightened regulatory risks and the company's recent weak quarterly performance as concerns for the company.</p>
    
     <p><span>Prabudas Lilladher:</span> The renowned brokerage has a Buy rating on the stock with a price target of Rs 1,070. The firm has cited the share price is comfortably valued and the risk-reward scenario remains favorable in the near future. However, regulatory concerns and delay in product launches remain concerns.</p>
     <p style={{fontStyle:'italic'}}>This is not investment advice. Investments in the securities market are subject to market risk, read all the related documents carefully before investing. Past performance is not indicative of future returns.</p>


     <div className='drop-down'>
        <span className='down'>
            <p>What is Cipla share price?</p>
            <FontAwesomeIcon  icon={faCaretDown}/>
        </span>
        <span className='down'>
            <p>Why is Cipla share price falling?</p>
            <FontAwesomeIcon  icon={faCaretDown}/>
        </span>
        <span className='down'>
            <p>What is Cipla target price?</p>
            <FontAwesomeIcon  icon={faCaretDown}/>
        </span>
      </div>
</div>
  )
}

export default SectionFour