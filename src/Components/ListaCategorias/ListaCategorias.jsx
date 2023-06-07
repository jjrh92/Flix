import React from "react";
import styled from "@emotion/styled";
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material";
import { Select } from "@mui/material";
import { ColoresJulioFlix } from "../../global";

const Categorias = [
    {
      value: 'Front-End',
      label: 'Front-End',
    },
    {
      value: 'Back-End',
      label: 'Back-End',
    },
    {
      value: 'Innovación & Gestión',
      label: '',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const ContenedorOpciones = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: ColoresJulioFlix.fondo,
    alignItems: "center",
    
});

const ListaCategorias = () => {

    return <ContenedorOpciones>
        <Select color="error" sx={{width: "335px", backgroundColor: "whitesmoke", borderRadius:"10px 10px 0px 0px",}}>
            <MenuItem>Front-End</MenuItem>
            <MenuItem>Back-End</MenuItem>
            <MenuItem>Innovación & Gestión</MenuItem>
            <MenuItem selected>Custom</MenuItem>
        </Select>
    </ContenedorOpciones>
}

export default ListaCategorias