
import {useState} from "react";

// OJO PROBAR HANDLE POR HANDLE EN ORDEN, PRIMERO CONSTRUIR HTML


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    // probar primero con el puro console de arriba, después reemplazar con:
    setEmail(event.target.value);
  };

  // mencionar que esta es otra manera de traer la función, es idéntico a lo de arriba  
  // pero con destructuración ES6
  const handlePasswordChange = ({target: {value}}) => {
    setPassword(value);
  };

  const handleFormSubmit = (event) => {
    console.log("Submit realizado");
    // probar aquí cómo refresca toda la página y no muestra el console, sin pasar event como argumento para añadirlo
    // después y  también el preventDefault de abajo
    event.preventDefault();
    // aclarar aquí también que el siguiente alert funciona concatenando solo con apóstrofe al revés
    alert(`Usuario: ${email}, Password: ${password}`);
  };
  
  return (
    <div className="App">
      <form onSubmit = {handleFormSubmit}>
        <h2>Iniciar Sesión</h2>
        <label>Correo
          <input type="email" value={email} onChange = {handleEmailChange}/>
        </label>
        <label>Password
          <input type="password" value={password} onChange = {handlePasswordChange}/>
        </label>
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
