import React from 'react';


const ContacFormText = ({ text1Form, text2Form }) => {
  
  return (
      <div className="container-texts">
    <div>
    <p className="text1form">{text1Form} </p>
    </div>
     <div>
     <p className="text2form">{text2Form} </p>
     </div>
     </div>
  );
}

export default ContacFormText;
