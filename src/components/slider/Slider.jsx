import React, { useState  } from "react";
import ImgComp from "./Imgcomp";
import i1 from "../../assets/static/Pics/1.jpg";
import i2 from "../../assets/static/Pics/2.jpg";
import i3 from "../../assets/static/Pics/3.jpg";
// npm install --save-dev @iconify/react @iconify/icons-bytesize
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-bytesize/chevron-left";
import chevronRight from "@iconify/icons-bytesize/chevron-right";
import "../../assets/styles/components/Slider.scss";




function Slider() {

    const [X, SetX] = useState(0)
    // const [startSlide, SetStartSlide] = useState (1000)

    //let sliderArr = [1, 2, 3];
    

    let sliderArr = [<ImgComp 
        src={i1} 
        textSlide="700mil personas padecen inseguridad alimentaria severa en Chile" 
        textSlide2="Ayúdanos a combatir el hambre en nuestras comunidades."
        btnSelect="Has tu Aporte"
        />,
        <ImgComp 
        src={i2}
        textSlide="Comida para todos es una plataforma solidaria nace de la unión de organizaciones sociales" 
        textSlide2="Trabajamos para salvaguardar la seguridad alimentaria."
        btnSelect="Conoce Más"
        />,
        <ImgComp
        src={i3}
        textSlide="Campaña de navidad 2020.En estas fechas especiales para nuestras comunidades" 
        textSlide2="Queremos llevar un almuerzo sano, rico, nutritivo." 
        btnSelect="Conoce Más"
        />];
    


  const goLeft = () => {
    X === 0 ? SetX(-100 * (sliderArr.length - 1)) : SetX(X + 100);
  };
  const goRight = () => {
    X === -100 * (sliderArr.length - 1) ? SetX(0) : SetX(X - 100);
  };

    return (
        <div className='slider' >
            {sliderArr.map((item, index) => {
                return (
                    <div key={index}  style={ {transform:`translateX(${X}%)`} }>
                        {item}
                    </div>
                )
            })}

            <button id="goLeft" onClick={goLeft}><Icon icon={chevronLeft} color="#FFFFFF" width="1em" /></button>
            <button id="goRight" onClick={goRight}><Icon icon={chevronRight} color="#FFFFFF" width="1em" /></button>

    </div>

  
  
  )
  
}

export default Slider;
