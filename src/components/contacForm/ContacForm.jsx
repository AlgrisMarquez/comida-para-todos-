import React from 'react'
import '../../assets/styles/components/ContacForm.scss'
import ContacFormText from './ContacFormText'
import InputForm from './InputForm'
import ButtonSubscribe from './ButtonSubscribe'


const ContacForm = () => {
   
    return (
        <div className= "container-seccionForm" >
            <div>
            <ContacFormText 
            text1Form="Estar al día también es una buena forma de poder aportar."
            text2Form= "Suscríbete a nuestro newsletter para recibir todas las novedades que trae Comida para todos."
            />
            </div>
            <div>
             <InputForm />
             <ButtonSubscribe/>
            </div>

        </div>
    )
}

export default ContacForm;
