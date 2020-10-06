import React, { Fragment } from 'react';
import '../../assets/styles/components/BotonDonar.scss'; 

//href ="https://yodono.cl/proyecto/207/CultivaComidaparaTods" 


function BtnDonate () {
    return (
        <Fragment>
            <div className = 'containerBtnDonate'>
                <button className= 'btnDonate'>Haz Tu aporte</button>
               
            </div>
        </Fragment>
    )
}
export default BtnDonate; 