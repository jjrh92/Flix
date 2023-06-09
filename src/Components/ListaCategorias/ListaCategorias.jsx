import React from "react";
import styled from "@emotion/styled";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { ColoresJulioFlix } from "../../global";

const ContenedorOpciones = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: ColoresJulioFlix.fondo,
    alignItems: "center",
    
});

let categorias = [

  "Front-End",
  "Back-End",
  "Innovación & Gestión",
  "Custom",
  
];

export default function ListaCategorias() {
  const [categoria, setCategoria] = React.useState("");

  const manejarCambio = (event) => {
    setCategoria(event.target.value);
  };

  return (
    <div>
      <FormControl color="error" variant="filled" sx={{ backgroundColor:"whitesmoke", width:"335px", borderRadius:"10px 10px 0px 0px",}}>
        <InputLabel id="demo-simple-select-filled-label">Seleccionar Categoria del Video</InputLabel>
        <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={categoria} onChange={manejarCambio}>

          {categorias.map((categoria, indice) => {

            return <MenuItem key={indice} value={categoria}>{categoria}</MenuItem>

          })}
          
        </Select>
      </FormControl>
    </div>
  );
}