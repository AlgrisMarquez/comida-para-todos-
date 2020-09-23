import React, { Fragment } from 'react'; 
import {Link} from 'react-router-dom'

function LinksNavbar () {

    return (
        <Fragment>
        <div className="navBar">
            <Link>Conócenos</Link>
            <Link>Que Hacemos</Link>
            <Link> Hazte Parte<i class="material-icons">favorite</i></Link>
            <Link>Te Contamos</Link>
            <Link> Contáctanos</Link>
        </div>
        </Fragment>
    ) };

export default LinksNavbar;