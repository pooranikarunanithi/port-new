import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Avatar from "@material-ui/core/Avatar";
import  NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu><br />
	
        <a href="pj">
         <img alt="pj" src="Screenshot 2022-03-15 113456.jpg"/>
        
      </a>
  
  <a href="">|</a>
  <a href="">Personal</a>
 

  <div class="dropdown">
  <a href="#Personal"  class="dropbtn1">Business▾</a>
  </div>

  

  
  
  
  
  
 
   <div class="container-fluid">
  <a href="#Personal"  class="dropbtn">EN/USD▾</a>
  </div>
  <div class="container-fluid">
  <a href="#about" className ="dropdown1"><ElectricBoltIcon /></a>
  </div>
  <div class="container-fluid">
  <a href="#about" className ="dropdown1"><NotificationsActiveIcon /></a>
  </div>
   <NavBtn>
          <NavBtnLink to=''>wallet</NavBtnLink>
        </NavBtn>
        
  <div class="container-fluid">
  <Avatar alt="Remy Sharp" src="/pooriimg.jpg" />
  </div>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
  


		
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
