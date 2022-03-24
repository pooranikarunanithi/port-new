
import React, { useState } from 'react'
import './styles/Main.scss'
import man from './assets/dribble-removebg-preview (1).png'
import SearchIcon from "@material-ui/icons/Search";
import { Facebook, Instagram, Twitter } from '@material-ui/icons'

const Main = () => {
    return (
  
<div class ="container-fluid">

  <div class = "column">
  <br />
  <br />
  <br />
  <br />
  <img alt="pj" className="tenk
  "src="10k.png"/>   
  <h6>SPEEDUP COMMUNICATIONS</h6>
                            <h1>A New </h1>
                            <h1>Pulse of  
  </h1> 
                            <h1>Dream</h1>
                            <h7>Deco is the palce for everything related to a
                            project,to do list or communication.</h7>
                            
                            <div className="buttons">
                        <button>Book a Demo </button><br /><br />
                        <Twitter className='icon'/>
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                    </div>
                   
                    </div>
                
                       
                    
  <div class="column">
       
  <img src={man} alt="" /> 
  
                
                   
                
  </div>
  
  <div class="column">
  <SearchIcon />
  
  <input type="text" placeholder="User Search" id="search" class="search" /><br /><br /><br />
  
  
  <img src="whatsapp.jpg" className="whatsapp" alt="" /> 
  <img src="strightline-removebg-preview.png" className="strightline" alt="" /> 
  <img src="downarrow.jpg" className="downarrow" alt="" /> 
  </div>
  
  
</div>

    )
}
export default Main;