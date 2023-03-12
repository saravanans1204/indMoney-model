import React from 'react'
import { useState,useEffect} from 'react'
import '../css/navbar.css'
import logo from '../assets/ind.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faCaretUp,faMagnifyingGlass,faCaretDown,faHeadset,faBarsStaggered,faXmark,faArrowRight, faL} from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {

    const [clicked,setClicked]=useState(false)
    const [pressed,setPressed]=useState(false)
    const [carot,setCarot]=useState(false)

    const [dropDown,setdropDown]=useState(false)
    

    const dropDownClick=()=>{
        setdropDown(!dropDown)
        if(!dropDown){
            // document.querySelector('.body-main').style.opacity='40%'
            console.log(document.querySelector('.dropdown-hidden').classList.add('dropdown-hidden-active'))
            
            
        }else{
            console.log(document.querySelector('.dropdown-hidden').classList.remove('dropdown-hidden-active'))
        }
        
    }
    // const [windowDimensions, setWindowDimensions] = useState(
    //     getWindowDimensions()
    //   );
    function clickCarot(){
        setCarot(!carot)
        console.log('hello')
        document.querySelector('.drop-container').classList.toggle('drop-active')
        if(!carot && !clicked){
            // document.querySelector('.body-main').style.opacity='40%'
            document.querySelector('.body-main').classList.add('blur')
            
            
        }else{
            document.querySelector('.body-main').classList.remove('blur')
        }
        
        
    }


    // function getWindowDimensions() {
    //     const { innerWidth: width, innerHeight: height } = window;
    //     return {
    //       width,
    //       height,
    //     };
    //   }

    //   useEffect(() => {
    //     function handleResize() {
    //       setWindowDimensions(getWindowDimensions());
          
    //     }
    
    //     window.addEventListener("resize", handleResize);
        
    //     return () => window.removeEventListener("resize", handleResize);
    //   }, []);
    
 
    if(clicked ){
        document.querySelector('.body-main').classList.remove('blur')
    }

 

    if(carot && !clicked ){
        document.querySelector('.body-main').classList.add('blur')
    }
    if(carot && !clicked ){
        document.querySelector('.body-main').classList.add('blur')
    }
    
   
   const clickMenu=()=>{
    setClicked(!clicked)
    if(!clicked){
        document.querySelector('body').style.overflow='hidden'
        document.querySelector('.nav-menu-ul').classList.add('nav-menu-active')
    }else{
        document.querySelector('body').style.overflow='scroll'
        document.querySelector('.nav-menu-ul').classList.remove('nav-menu-active')
        
    }
    document.querySelector('.nav').classList.toggle('hidden-active') 
   }

   const clickSearch=()=>{
    document.querySelector('body').style.overflow='hidden'
    if(!pressed){
        document.querySelector('body').style.overflow='hidden'
    }else{
        document.querySelector('body').style.overflow='scroll'
    }
    setPressed(!pressed)
   }





  return (
    <div className='nav-bar'>
        
        <img src={logo}className='hidden-main' width={'50px'}></img>
        
        {clicked?<h2 className='hidden-main'>Menu</h2>  :"" }
        <nav className='nav'>
            <aside className='nav-left'>
                <img src={logo} width={'50px'}></img>
                <div className='search'>
                    <div className="search-logo">
                    
                    <FontAwesomeIcon icon={faMagnifyingGlass}  />
                    </div>
                    <input type='text' placeholder='Search'></input> 
                    
                </div>
                
                
            </aside>
            <div className='nav-menu'>
                <ul className='nav-menu-ul nav-menu-active'>
                    <div className='drop-container'>
                        <ul>
                            <li>INDstocks</li>
                            <li>Mutual Funds</li>
                            <li>US Stocks</li>
                            <li>Fixed Deposits</li>
                        </ul>
                    </div>
                            {clicked? 
                            <div onClick={dropDownClick}>
                                <li>
                                    <a ><p>Invest</p></a>
                                    <FontAwesomeIcon className='hidden-icons' icon={!dropDown?faCaretDown:faCaretUp}  />
                                </li>
                                <div className='dropdown-hidden ' >
                                        <li>INDstocks</li>
                                    <li>Mutual Funds</li>
                                    <li>US Stocks</li>
                                    <li>Fixed Deposits</li>
                                </div>
                            </div>:''}
                            <span onClick={clickCarot}>
                            {!clicked?<li>
                                <a ><p>Invest</p></a>
                                    {clicked?<FontAwesomeIcon className='hidden-icons' icon={carot?faCaretDown:faCaretUp}  />:''}
                                </li>:''}
                                
                            
                                    
                            {!clicked?<FontAwesomeIcon  icon={carot?faCaretDown:faCaretUp}  />:''}
                            </span>
                        <li>
                            <a>Features</a>
                            {clicked?<FontAwesomeIcon className='hidden-icons' icon={faArrowRight}  />:''}
                        </li>
                        <li>
                            <a>Pricing</a>
                            {clicked?<FontAwesomeIcon  className='hidden-icons' icon={faArrowRight}  />:''}
                        </li>
                        <li>
                            <a>Blog</a>
                            {clicked?<FontAwesomeIcon className='hidden-icons' icon={faArrowRight}  />:''}
                        </li>
                    </ul>
                <div className='nav-buttons'>
                <FontAwesomeIcon className='headset-icon' icon={faHeadset}  />
                <button className='login' ><p>Log in</p></button>
                <button className='signup'><p>Sign up</p></button>
            
                </div>
                
                </div>
               

            
            
            
        </nav>
            <div className='hidden-menu'>
                    <FontAwesomeIcon className='hidden-search' onClick={clickSearch}  icon={!pressed?faMagnifyingGlass:faXmark}  />
                    {!pressed?<FontAwesomeIcon className='hidden-bar' onClick={clickMenu} icon={!clicked?faBarsStaggered:faXmark} />:''}
            </div>

            {pressed?<div className='search-hidden'>
                <div className='search-main'>
                    <div className="search-logo-hidden">
                        <FontAwesomeIcon icon={faMagnifyingGlass}  />
                    </div>
                        <input type='text' placeholder='Search'></input> 
                </div>
                
                </div>
                :""}
    </div>
  )
}

export default NavBar