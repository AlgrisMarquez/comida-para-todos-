import React, {Fragment} from 'react';
//import {Link} from 'react-router-dom'; 
import '../../assets/styles/components/menu/LinksNavbar.scss'; 



function LinksNavbar () {

    return (
        <Fragment>
            <ul>
            <li><a href="/" >Conócenos</a></li>
            <li><a href="/" >Que Hacemos</a></li>
            <li><a href="/ ">Hazte Parte</a></li>
            <li><a href="/" >Te Contamos</a></li>
            <li><a href="/" >Contáctanos</a></li>
            </ul>
        
            {/* <div className="navBar">
            <Link className="linkMenu">Conócenos</Link>
            <Link className="linkMenu">Que Hacemos</Link>
            <Link className="linkMenu"> Hazte Parte</Link>
            <Link className="linkMenu">Te Contamos</Link>
            <Link className="linkMenu"> Contáctanos</Link>
        </div> */}
        </Fragment>
    ) };

export default LinksNavbar;