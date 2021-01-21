import React from "react";

const Form = () => {
  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">Nombre:</label>
        <input className="input" />
      </div>

      <div className="input-item">
        <label className="label">Ubicación:</label>
        <input className="input" />
      </div>
    </div>
  );
};

export default Form;
