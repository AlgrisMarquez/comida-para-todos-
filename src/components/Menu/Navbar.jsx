import React, { Fragment } from 'react'; 
import LogoHome from './Logo';
import LinksNavbar from './LinksNavbar';
import LinksRRSS from './LinksRRSS';
//import BotonDonar from './BotonDonar';


const Navbar = () => {
    return (
    
        <Fragment>
            <div className="container-nav">
                <LogoHome />
                <LinksNavbar />
                <LinksRRSS />
               
            </div>   
        </Fragment>
    );
}

export default Navbar;
