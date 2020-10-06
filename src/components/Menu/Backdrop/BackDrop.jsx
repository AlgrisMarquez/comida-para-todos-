import React from 'react'
import './BackDrop.scss'

const BackDrop = (props) => (
    <div className="backDrop" onClick={props.click}/>
)
   
export default BackDrop
