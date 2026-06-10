import { useContext, useState } from 'react'
import styles from './Login.module.css' 
import { AuthContext } from '../../context/authcontext';

function Login() {
const [Email, setEmail]= useState("");
const [password, setPassword]= useState("");
const [loading, setLoading] = useState(false);
const context = useContext(AuthContext);
const [warning, setWarning]= useState("");
  async function LoginSupabase() {
    const cleanEmail = Email.trim();
    const cleanPassword = password.trim();
    if (!cleanEmail || !cleanPassword) {
      alert("Por favor completa todos los campos.");
      return;
    };
    setLoading(true);
    const success = await context.login(cleanEmail,cleanPassword);
    setLoading(false);
    if (success){
      alert("nice");
    } else {
      setWarning("Revisa tus credenciales");
    };
  }
  return (
    <div>
      <h1>Bhook</h1>
        <div className={styles.login}>
          {loading ? (
            <>
            Verificando...
            </>
           ) : (
           <>
           <div>
            Correo: <br />
            <input type="text" 
            id="correo"
            onChange={e => setEmail(e.target.value)}
            placeholder='Correo'
            />
            </div>
            <div>
              Contraseña: <br />
              <input type="text"
               id="password"
               onChange={e=> setPassword(e.target.value)}
               placeholder='Contraseña' />
            </div>
            <div>
              <button onClick={LoginSupabase}
            >Acceder</button> <br />
            <b>{warning}</b>
            </div>
            
            </>
            )}    
        </div>
            
    </div>
  )
}

export default Login