import React from 'react'

const TestimonialsText = ({ textTest, textName, textWhere }) => {
    return (
        <div className="container-testimonialsText">
        <p className="testimonial" >{textTest}</p>
        <p className="testimonialName">{textName}</p> 
        <p className="testimonialWhere">{textWhere}</p>           
        </div>
    )
}

export default TestimonialsText
