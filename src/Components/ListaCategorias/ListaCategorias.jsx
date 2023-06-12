import React from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";

let categorias = [

  "Front-End",
  "Back-End",
  "Innovación & Gestión",
  "Custom",
  
];

export default function ListaCategorias (props) {

  const [categoria, setCategoria] = React.useState("");

  const manejarCambio = (evento) => {

    setCategoria (evento.target.value);
    props.actualizarCategoria (evento.target.value);

  };
  
  return (

    <FormControl color="error" variant="filled" sx={{ backgroundColor:"whitesmoke", width:"335px", borderRadius:"10px 10px 0px 0px",}}>

      {/* value={categoria} */}
      <InputLabel id="etiquetaDelSelect">Seleccionar Categoria para el Video</InputLabel>
      <Select onChange={manejarCambio} value={props.valor} required labelId="etiquetaDelSelect">

      {categorias.map((categoria, indice,) => {

        return <MenuItem key={indice} value={categoria}>{categoria}</MenuItem>

      })}
          
      </Select>
    </FormControl>
  );
}