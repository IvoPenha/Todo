import Card from 'react-bootstrap/Card';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './task.css'
import  styled  from 'styled-components';
const StyledFormatListBulletedIcon = styled(FormatListBulletedIcon)`
  color:#C2C2C2;

`;
const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  color:#C2C2C2;
`;

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
      <Card.Link className='footer'> <StyledFormatListBulletedIcon className='Todos'></StyledFormatListBulletedIcon  > <span> Tarefas </span>  <StyledAccessTimeIcon className='Hour'/> <span> 00:00:00  </span> </Card.Link>
    </Card.Body>
  </Card>
       


    )


}