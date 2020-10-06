
import React, { Fragment } from 'react';
import LogoHome from './Logo';
import LinksNavbar from './LinksNavbar';
import LinksRRSS from './LinksRRSS';
import BtnDonate from './BotonDonar';
import '../../assets/styles/components/Navbar.scss';
import '../../assets/styles/components/menu/LinkRRSSscss;'

const Navbar = () => {
  return (

    <Fragment>
      <nav>

        <div className="container-nav">
          <LogoHome />
          <LinksNavbar />
          <div class="boxContainerRRSS"> <LinksRRSS /></div>
          
          <BtnDonate />

        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
