import { useState } from "react";
import React from "react";
import { ColoresJulioFlix } from "../../global";
import { styled } from '@mui/system';
import Boton from "../Boton/Boton";
import CampoTexto from "../CampoTexto/CampoTexto";
import uuid from "react-uuid";
import TablaListado from "./TablaListado";
import axios from "axios";
import Swal from 'sweetalert2'


const ContenedorFormulario = styled ("section") ({

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "80px 0px",
    backgroundColor: ColoresJulioFlix.fondo,
    gap: "100px",
    
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

const ContenedorTabla = styled ("div") ({

    width: "90%",
    boxShadow: "1px 1px 15px 5px #DC1A28",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "60px",
    gap: "30px",
    
});

const Formulario = () => {
    
    const [nombre, actualizarNombre] = useState ("");
    const [id, actualizarID] = useState ("");

    const manejarEnvio = (evento) => {

        evento.preventDefault ();

		axios.post('http://localhost:3001/Videos', {

			id: uuid(),
			TituloVideo: nombre,
			IdYoutube: id,

		}).then(resp => {

            Swal.fire ({

                timer: 2000,
                position: 'center',
                icon: 'success',
                title: "Video Agregado con exito. \nSe actualizara la pagina en breve.",
                iconColor: '#DC1A28',
                color: '#DC1A28',
                background: '#121212',
                showConfirmButton: false,

            })

            setTimeout(() => {

                window.location.reload();
    
            }, 2000);

		}).catch(error => {

            Swal.fire ({

                timer: 2000,
                position: 'center',
                icon: 'error',
                title: 'No se pudo agregar el video',
                iconColor: '#DC1A28',
                color: '#DC1A28',
                background: '#121212',
                showConfirmButton: false,

            })


		});

    }

    return (

        <ContenedorFormulario>
            <Form autoComplete="off" id="formularioVideo" onSubmit={manejarEnvio}>
                <H1Formulario>Nuevo Video</H1Formulario>
                <CampoTexto valor={nombre} actualizarValor={actualizarNombre} id={"TituloVideo"} label={"Titulo del Video"} placeholder={"Ingrese titulo del Video"}/>
                <CampoTexto valor={id} actualizarValor={actualizarID} IdYoutube={"idVideo"} label={"Id del Video (formato Youtube)"} placeholder={"Ejemplo: jfKfPfyJRdk"}/>
                <ContenedorBotones>
                    <Boton tipo="submit" title="Agregar un nuevo video al homepage" texto={"Agregar Video"}/>
                </ContenedorBotones>
            </Form>
            <ContenedorTabla>
                <H1Formulario>Listado de Videos</H1Formulario>
                <TablaListado />
            </ContenedorTabla>
        </ContenedorFormulario>

    );

};

export default Formulario;