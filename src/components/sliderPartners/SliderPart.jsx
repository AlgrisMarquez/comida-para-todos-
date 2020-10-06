import React, {useState}from 'react';
import ImgPartComp from './ImgPartComp'
import Carousel from 'react-bootstrap/Carousel'
import '../../assets/styles/components/SliderPart.scss'

import Im1 from '../../assets/static/images/imgPartners/prueba1.jpg'
import Im2 from '../../assets/static/images/imgPartners/prueba2.jpg'
import Im3 from '../../assets/static/images/imgPartners/prueba3.jpg'
import Im4 from '../../assets/static/images/imgPartners/prueba4.jpg'
import Im5 from '../../assets/static/images/imgPartners/prueba5.jpg'
import Im6 from '../../assets/static/images/imgPartners/prueba6.jpg'
import Im7 from '../../assets/static/images/imgPartners/prueba7.jpg'






const  SliderPart = () =>{
    const [index, setIndex] = useState(0);
    let arrayPartners = [<ImgPartComp src={Im1} />,
        <ImgPartComp src={Im2} />,
        <ImgPartComp src={Im3} />,
        <ImgPartComp src={Im4} />,
        <ImgPartComp src={Im5} />,
        <ImgPartComp src={Im6} />,
        <ImgPartComp src={Im7} />]
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return(
    <Carousel bsclassName="container-sliderPartners" activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item bsclassName="slidePartners">
            {arrayPartners.map((item, index) => {
                return (
                    <div key={index} className="d-block w-100">
                        {item}
                    </div>
                )
                })
            }
    </Carousel.Item>
    </Carousel>
    )
};


  export default SliderPart;
