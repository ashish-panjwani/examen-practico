import React, {useState} from "react";
import ReactDOM from "react-dom";
import Name from "./NameComponent";
import Location from "./LocationComponent";
import UserForm from "./UserForm";
import { UserContext } from './context/UserContext';
import "./styles.css";

function App() {

  const [user,setUser] = useState({
      userName:"",
      location:""
  })

  return (
    <div className="App">
      <h1>Ejercicio Práctico</h1>
      <p>
        En una aplicación de React es muy común pasar datos de arriba a abajo (del padre al hijo), pero esto puede ser complicado si es necesario pasar información del padre a componentes muy anidados o niveles muy inferiores.
      </p>
      <p>
        Implemente una solución para que los valores de <b>Nombre</b> y <b>Ubicación</b> estén accesibles en sus respectivos componentes sin tener que pasarles parámetros de manera explícita.
      </p>
      <div className="container">
          <UserContext.Provider value={[user,setUser]}>
              <UserForm />
              <h4 className="is-size-4">Mostrar Información del Usuario Aquí 👇</h4>
              <Name />
              <Location />       
          </UserContext.Provider>
            
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
