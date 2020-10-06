import React from 'react'; 
import Card from "react-bootstrap/Card";
// import '../../assets/styles/components/CardNews.scss'; 
import Button from "react-bootstrap/Button";
import news1 from "../../assets/static/images/news1.png";


const CardNews = () => {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="news1.png/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )
}

export default CardNews; 
