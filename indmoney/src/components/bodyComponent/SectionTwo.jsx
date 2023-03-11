import React from 'react'
import shareprice from '../../assets/Cipla_share_price.png'


const SectionTwo = () => {
  return (
    
    <div className='second-section'>
        <h1>Cipla share price falling</h1>
        <p>Pharmaceutical major Cipla’s share price has
            been witnessing a sharp decline in the past month. 
            Notably, the Cipla share price has slipped almost 
            15% over the past month. In a one year period too, 
            the Cipla share price performance has been disappointing, 
            recording a fall of 6.5%.</p>
            

        <img style={{marginTop:'2vh'}} src={shareprice}></img>
        <p>So, why is the pharma major’s share price under pressure? What is
            causing this recent 
            decline in the Cipla share price? Let’s try and analyze!</p>
    </div>
    
  )
}

export default SectionTwo