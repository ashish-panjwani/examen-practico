import React, { useContext } from "react";
import {UserContext} from './context/UserContext';


const Form = () => {

  const  [user,setUser]  = useContext(UserContext);


  const handleName = (e) => {
      setUser({...user, userName:e.target.value})
  }

  const handleLocation = (e) => {
    setUser({...user, location:e.target.value})
}
 

  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">Nombre:</label>
        <input className="input" onChange={(e) => {handleName(e)}} />
      </div>

      <div className="input-item">
        <label className="label">Ubicación:</label>
        <input className="input" onChange={(e) => {handleLocation(e)}} />
      </div>
    </div>
  );
};

export default Form;
