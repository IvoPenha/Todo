import Card from 'react-bootstrap/Card';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './task.css'
import  styled  from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";
import Stack from 'react-bootstrap/Stack';
const StyledFormatListBulletedIcon = styled(FormatListBulletedIcon)`
  color:#C2C2C2;
  margin-top:1%

`;
const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  color:#C2C2C2;
  margin-top:1%;
  margin-left:3%;
`;

export function Task(){
    return(
      <>
        <div className='cardContainer'>
        <Card className='card'>
       <Card.Body className='body'>
         <Card.Title className='title'>Em Atraso</Card.Title>
         
         <Card.Subtitle className="subtitle">Titulo da Task
             <span className='secondtitle'>
               Descrição da Task
             </span></Card.Subtitle>
         <Card.Link className='footer'> <StyledFormatListBulletedIcon className='Todos'></StyledFormatListBulletedIcon  > <span> Tarefas </span>  <StyledAccessTimeIcon className='Hour'/> <span> 16 de outubro, 22:30 </span> </Card.Link>
       </Card.Body>
     </Card>
        </div>      
      </>

    )


}