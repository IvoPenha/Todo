import Card from 'react-bootstrap/Card';
import './task.css'
export function Task(){
    return(
       
    <Card className='card'>
    <Card.Body className='body'>
      <Card.Title className='title'>Em Atraso</Card.Title>
      
      <Card.Subtitle className="subtitle">Card Subtitle
          <span className='secondtitle'>
            aa
          </span></Card.Subtitle>
            <Card.Text className='content'>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Link href="#" className='link'>Card Link</Card.Link>
    </Card.Body>
  </Card>
       


    )


}