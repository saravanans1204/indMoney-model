import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import imgs from '../assets/carousal assets/1.jpg'


const BodyCarousel = () => {


   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };

      const carouselData=[{
        id:1,
        img:imgs,
        p:'JP Morgan downgrades Indian IT sector: Check outlook on TCS, Wipro, Infosys and HCL Tech',
        time:new Date().toLocaleString()
      },{
        id:2,
        img:imgs,
        p:'JP Morgan downgrades Indian IT sector: Check outlook on TCS, Wipro, Infosys and HCL Tech',
        time:new Date().toLocaleString()
      },{
        id:3,
        img:imgs,
        p:'JP Morgan downgrades Indian IT sector: Check outlook on TCS, Wipro, Infosys and HCL Tech',
        time:new Date().toLocaleString()
      },{
        id:4,
        img:imgs,
        p:'JP Morgan downgrades Indian IT sector: Check outlook on TCS, Wipro, Infosys and HCL Tech',
        time:new Date().toLocaleString()
      },{
        id:5,
        img:imgs,
        p:'JP Morgan downgrades Indian IT sector: Check outlook on TCS, Wipro, Infosys and HCL Tech',
        time:new Date().toLocaleString()
      },{
        id:6,
        img:imgs,
        p:'JP Morgan downgrades Indian IT sector: Check outlook on TCS, Wipro, Infosys and HCL Tech',
        time:new Date().toLocaleString()
      }
      ];

      

  return (
    <div className='body'>
        <div className='related'>
            <h1>Related Articles</h1>  
            <Carousel responsive={responsive} containerClass='car' additionalTransfrom={-5}>
           
                {carouselData.map((car)=>{
                    return(
                        <div className='card-holder' key={car.id}>
                            <img src={car.img} alt='card'></img>
                            <div className='ctext'>
                              <h4>{car.p}</h4>
                              <p>{car.time}</p>
                            </div>
                           
                        </div>
                       
                    )
                })}
                 
            </Carousel> 

            <p className='disclaimer'>
            Disclaimer: This is not an investment advisory. 
            The article above is for information purposes only. 
            Investments in the securities market are subject to market 
            risks, read all the related documents carefully before investing.
             Past performance is not indicative of future returns. Please 
             consider your specific investment requirements, risk tolerance, 
             goal, time frame, risk and reward balance, and the cost associated 
             with the investment before choosing a fund, or designing a portfolio that suits your needs. 
             The performance and returns of any investment portfolio can neither be 
             predicted nor guaranteed.
            </p>
        </div>
    </div>
  )
}

export default BodyCarousel