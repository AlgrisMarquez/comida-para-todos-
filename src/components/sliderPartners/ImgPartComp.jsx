import React from 'react';  
//import '../../assets/styles/components/Imgcomp.scss'; 

function ImgPartComp({ src }) {
    let imgStyles ={
        width: 15+"%",
        height:"auto"
    }
    return <img src={src} alt="slider-Img" style={imgStyles}></img>;
}

export default ImgPartComp;