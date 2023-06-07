import React from "react";
import { ColoresJulioFlix } from "../../global";
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Boton from "../Boton/Boton";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ContenedorFormulario = styled ("section") ({

    display: "flex",
    justifyContent: "center",
    padding: "80px 0px",
    backgroundColor: ColoresJulioFlix.fondo,
    
});

const H1Formulario = styled ("h1") ({

    color: ColoresJulioFlix.textos,
    fontFamily: "Roboto",
    fontSize: "60px",
    fontWeight: "500",
    lineHeight: "70px",
    textAlign: "center",
    paddingTop: "30px",
    
});

const Formulario = () => {

    return (

        <ContenedorFormulario>
            <FormControl sx={{width: "90%", boxShadow: "5px 5px 15px #DC1A28", borderRadius:"20px", display:"flex", flexDirection:"column", alignItems: "center", paddingBottom: "30px", gap: "30px",}}>
                <H1Formulario>Nuevo Video</H1Formulario>
                <TextField variant="filled" id="tituloVideo" label="Nombre del Video" placeholder="Ingrese nombre del Video" color="success"sx={{backgroundColor: "whitesmoke", width: "335px", borderRadius: "10px",}}/>
                <TextField variant="filled" id="idVideo" label="ID Video (Formato Youtube)" placeholder="Ejemplo: jfKfPfyJRdk" color="success"sx={{backgroundColor: "whitesmoke", width: "335px", borderRadius: "10px",}}/>
                <Boton texto={"Agregar Video"}/>
            </FormControl>
        </ContenedorFormulario>

    );

};

export default Formulario;