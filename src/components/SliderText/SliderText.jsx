import React, {useEffect} from 'react'

export const SliderText = (props) => {

let [titlesSlider, setTitlesSlider] = useState([]);

  useEffect(() => {
    fetch("titlesSlider.json")
      .then((response) => response.json())
      .then((data) => setTitlesSlider((titlesSlider = data)));
  
  }, []);

  const getTitle = () => {

let item = titlesSlider.map(item, index => {
  return ( 
    titlesSlider.map(item, index) )
  }

return (

      <div key={index} class="carousel-caption">
        <h1>{item.title}</h1>
        
      </div>
       )
  