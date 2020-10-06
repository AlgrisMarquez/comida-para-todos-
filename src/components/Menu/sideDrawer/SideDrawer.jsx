import React from 'react'
import '../../../assets/styles/components/menu/navbarResponsive/SideDrawer.scss'
import LinksNavbar from '../LinksNavbar';
import LinkRRSSresp from '../LinksRRSSresp';
import BtnDonate from './BotonDonarResp';




const SideDrawer = (props) => { 
      let drawerClasses ='side-drawer';
      if(props.show) {
            drawerClasses ='side-drawer open';
      }
      return(
      <nav className={drawerClasses}>
      {/* <div className="spacer"/> */}
      <div className="side-drawerLinks"><LinksNavbar /></div>
      {/* <div className="spacer"/> */}
      <div><LinkRRSSresp/></div> 
      <div><BtnDonate/></div>
      
      </nav>

)}

export default SideDrawer
