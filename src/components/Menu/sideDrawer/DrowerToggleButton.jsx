import React from 'react'
import '../../../assets/styles/components/menu/navbarResponsive/DrowerToggleButton.scss'

const DrowerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>

    </button>

)
   
export default DrowerToggleButton
