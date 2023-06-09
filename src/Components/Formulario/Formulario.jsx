import React from "react";
import { ColoresJulioFlix } from "../../global";
import { styled } from '@mui/system';
import Boton from "../Boton/Boton";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaCategorias from "../ListaCategorias/ListaCategorias";

const ContenedorFormulario = styled ("section") ({

    display: "flex",
    justifyContent: "center",
    padding: "80px 0px",
    backgroundColor: ColoresJulioFlix.fondo,
    gap: "50px"
    
});

const ContenedorBotones = styled ("div") ({

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "10px",
    width: "28%",
    paddingBottom: "15px",


});

const H1Formulario = styled ("h1") ({

    color: ColoresJulioFlix.textos,
    fontFamily: "Roboto",
    fontSize: "60px",
    fontWeight: "500",
    lineHeight: "70px",
    textAlign: "center",
    paddingTop: "30px",
    userSelect: "none",
    
});

const Form = styled ("form") ({

    width: "90%",
    boxShadow: "1px 1px 15px 5px #DC1A28",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
    gap: "30px",
    
});



const Formulario = () => {

    const manejarEnvio = (evento) => {

        evento.preventDefault ();
        console.log ("manejar el envio", evento);

    }
    
    return (

        <ContenedorFormulario>
            <Form id="formularioVideo" onSubmit={manejarEnvio}>
                <H1Formulario>Nuevo Video</H1Formulario>
                <CampoTexto id={"tituloVideo"} label={"Nombre del Video"} placeholder={"Ingrese nombre del Video"}/>
                <CampoTexto id={"idVideo"} label={"Id del Video (formato Youtube"} placeholder={"Ejemplo: jfKfPfyJRdk"}/>
                <ListaCategorias />
                <ContenedorBotones>
                    <Boton tipo="submit" title="Agregar un nuevo video al homepage" texto={"Agregar Video"}/>
                    <Boton title="Volver al Homepage" texto={"Volver al Inicio"}/>
                </ContenedorBotones>
            </Form>
        </ContenedorFormulario>

    );

};

export default Formulario;