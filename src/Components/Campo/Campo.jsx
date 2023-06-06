import React from "react";
import { styled } from '@mui/system';
import { TextField } from "@mui/material";
import { ColoresJulioFlix } from "../../global";
import Boton from "../Boton/Boton";

const H1NuevoVideo = styled ("h1") ({

    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "60px",
    lineHeight: "70px",
    color: ColoresJulioFlix.textos,
    
});

const ContenedorFormulario = styled ("section") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    paddingRight: "40px",
    paddingBottom: "50px",
    paddingLeft: "40px",
    backgroundColor: ColoresJulioFlix.fondo,
    gap: "20px",
    
});

const ContenedorTextFields = styled ("div") ({


    backgroundColor: "firebrick",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "550px",

    
});

const ContenedorBotones = styled ("div") ({


    backgroundColor: "firebrick",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "550px",
    borderRadius: "5px",
    
});


const Campo = () => {

    return (

        <ContenedorFormulario>
        <H1NuevoVideo>Agregar Nuevo Video</H1NuevoVideo>
        <ContenedorTextFields>
            <TextField id="outlined-basic" label="Titulo del Video" variant="filled" color="info" required />
            <TextField id="outlined-basic" label="Id del Video (Youtube)" variant="filled" color="info" required />
            <TextField id="outlined-basic" label="Categoria Video" variant="filled" color="info" required />
            <ContenedorBotones>
            <Boton texto={"Agregar Video"}/>
            </ContenedorBotones>
        </ContenedorTextFields>
        
        </ContenedorFormulario>


    );

};

export default Campo;