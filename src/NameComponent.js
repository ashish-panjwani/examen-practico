import React, {useContext} from "react";
import { UserContext } from './context/UserContext';

const NameComponent = () => {

  const [user] = useContext(UserContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h5>
        <strong>Nombre</strong>:{user.userName}
      </h5>
    </div>
  );
};

export default NameComponent;
