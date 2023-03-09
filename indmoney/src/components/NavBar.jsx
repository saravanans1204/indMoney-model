import React from 'react'
import { useState } from 'react'
import '../css/navbar.css'
import logo from '../assets/ind.webp'
import search from '../assets/search.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faMagnifyingGlass,faCaretDown,faHeadset,faBarsStaggered,faXmark,faArrowRight} from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {

    const [clicked,setClicked]=useState(false)

  
   const clickMenu=()=>{
    setClicked(!clicked)
  
    document.querySelector('.nav').classList.toggle('hidden-active')
   }

   const clickSearch=()=>{
  
    document.querySelector('.nav').classList.toggle('')
   }




  return (
    <div className='nav-bar'>
        <img src={logo} width={'50px'}></img>
        {clicked?<h2 className='menu'>Menu</h2>  :"" }
        <nav className='nav'>
            
            <aside className='nav-left'>
                
           
                <div className='search'>
                    <div className="search-logo">
                    <FontAwesomeIcon icon={faMagnifyingGlass}  />
                    </div>
                    <input type='text' placeholder='Search'></input> 
                </div>
                
                
            </aside>
            <div className='nav-menu'>
                        <ul>
                            <span>
                                <li>
                                    <a><p>Invest</p></a>
                                    {clicked?<FontAwesomeIcon className='hidden-icons' icon={faCaretDown}  />:''}
                                </li>
                                {!clicked?<FontAwesomeIcon  icon={faCaretDown}  />:''}
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
                    <FontAwesomeIcon className='hidden-search'  icon={faMagnifyingGlass}  />
                    <FontAwesomeIcon className='hidden-bar' onClick={clickMenu} icon={!clicked?faBarsStaggered:faXmark} />
            </div>
    </div>
  )
}

export default NavBar