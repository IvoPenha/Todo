import { Header } from "../../../components/authHeader/authHeader"
import './styles.css'
export function Register()  {
    return(
        <>
        <Header link='/login' msg='Ja possui uma conta'></Header>
        <div className="register">
        <div className="inputField">
        <h2 className="info"> NOVA CONTA </h2>

             <div className="info">
              <label htmlFor="name">Nome:</label>
              <input type="text" name="name" id="" />
            </div>
            <div className="info">
              <label htmlFor="email">E-Mail:</label>
              <input type="email" name="email" id="" />
            </div>
            <div className="info">
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="" />
            </div> 
            <div className="info">
                <label htmlFor="passwordCheck">Confirmação de senha:</label>
                <input type="password" name="passwordCheck" id="" />
            </div>   
            <div className="info">
                <button className="loginButton">
                    ENTRAR
                </button>
            </div>
       
        </div>
       
        </div>      
        </>
    
       
        )
    }
