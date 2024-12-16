import React from "react";
import TextField from "@mui/material/TextField";

const CampoTexto = (props) => {
  const manejarCambio = (evento) => {
    props.actualizarValor(evento.target.value);
  };

  return (
    <TextField
      value={props.valor}
      onChange={manejarCambio}
      required
      variant="filled"
      id={props.id}
      label={props.label}
      placeholder={props.placeholder}
      color="error"
      sx={{
        backgroundColor: "whitesmoke",
        width: "335px",
        borderRadius: "10px 10px 0px 0px",
      }}
    />
  );
};

export default CampoTexto;
