import React from 'react'
import '../../assets/styles/components/ContacForm.scss'

const InputForm = () => {
    return (
        <div className="container-Form">
            <form>
            <label>
             <p className="textLabelInput">"Nombre y apellido*"</p>
            <input className="inputBox" type="text" placeholder="Ingresa Nombre y apellido*"/>
            </label>
            <label>
             <p className="textLabelInput">"Correo electrónico*"</p>
            <input className="inputBox" type="text" placeholder="Ingresa Correo electrónico"/>
            </label>
            </form>
        </div>
    )
}

export default InputForm
