import React, {useContext} from "react";
import { UserContext } from './context/UserContext';

const LocationComponent = () => {

  const [user] = useContext(UserContext);

  return (
    <div>
      <h5>
        <strong>Ubicación</strong>:{user.location}
      </h5>
    </div>
  );
};

export default LocationComponent;
