import React, { Fragment } from 'react'
import TestimonialsText from './TestimonialsText'
import Img1 from '../../assets/static/images/imgTestimonials/testimonail_1.jpg'
import '../../assets/styles/components/Testimonials.scss'


const Testimonials = () => {
    
       

       
    
    return (
        <Fragment>
            <div className="container-Testimonial">
                
            <img  className="img-testimonial" src={Img1} alt="testimonial"/>
              
               
             <div className="container-circleText">
             <TestimonialsText 
             textTest="“Comida para todos es un gran aporte a las comunidades, ellos nos hacen sentir que no estamos solos.”"
             textName="Maria Hernandez"
             textWhere="Valle de la Luna, Quilicura"
             />
             </div>
           
            </div>
            
        </Fragment>

    )
}

export default Testimonials
