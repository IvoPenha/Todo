import { Header } from "../../../components/authHeader/authHeader";
import './styles.css'
export function Login()  {
    return(<>
    <Header link='/register' msg='Não possui uma conta'/>
     <div className="login">
        <div className="inputField">
        <h2 className="info"> AUTENTICAÇÃO </h2>

            <div className="info">
              <label htmlFor="email">E-Mail:</label>
              <input type="email" name="email" id="" />
            </div>
            <div className="info">
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="" />
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
