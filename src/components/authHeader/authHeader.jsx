import './styles.css'
import  Icon  from "../../assets/Icon.png";
import { Link } from 'react-router-dom';
import { Register } from '../../pages/authpages/register';
export function Header(props){
    return(
        <div id= "autheader">
              <div className='rightMessage'>
                <Link to={props.link}> <a href="">{props.msg}</a>  </Link>
                   
            
            
            </div>
            <div className='logo'>
               <a href="../">
                <img src= {Icon} alt="Icone" className='icon'/>
                </a> 
            </div>
            
          
        </div>

    )
    
}