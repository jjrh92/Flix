import React, { useState, useEffect } from "react";
import { ColoresJulioFlix } from "../../global";
import { styled } from '@mui/system';
import { Link } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import uuid from "react-uuid";
import axios from "axios";

const Tabla = styled ("table") ({

    backgroundColor: ColoresJulioFlix.fondo,
    color: ColoresJulioFlix.textos,
    display: "flex",
    justifyContent: "center",
    userSelect: "none",
    fontFamily: "Roboto",
});

const TD = styled ("td") ({

    border: "2px solid",
    textAlign: "center",
    padding: "30px",

});


const TablaListado = () => {
    
    const [DatosLista, setDatosLista] = useState([])
    useEffect( () => {

        fetch ("http://localhost:3001/Videos/")
            .then (response => response.json())
            .then (data => setDatosLista(data))
            .catch (err => alert ("No se ha podido conectar al JSON-SERVER: "+ err))

    }, []);

    const EliminarVideo = evento => {

        axios.delete(`http://localhost:3001/Videos/${evento.currentTarget.id}`)

        .catch(error => {

            console.error(error);

        });

        alert ("Video Eliminado ID: " +evento.currentTarget.id+ ". \nSe actualizara la pagina.");
        window.location.reload();


    };
    
    return (

        <Tabla>
            <tbody>
                <tr>
                    <TD>ID (uuid)</TD>
                    <TD>Titulo</TD>
                    <TD>ID (Youtube)</TD>
                    <TD>Eliminar</TD>
                    <TD>Editar</TD>
                </tr>
        {DatosLista.map ((props) => {
        return <tr key={uuid()}>
                    <TD>{props.id}</TD>
                    <TD>{props.TituloVideo}</TD>
                    <TD><Link title="Presiona para abrir en otra pestaña" sx={{color: ColoresJulioFlix.textos}} underline="none" href={`https://youtu.be/${props.IdYoutube}`} target="_blank" rel="noopener noreferrer">{props.IdYoutube}</Link></TD>
                    <TD onClick={EliminarVideo} id={props.id} title={"Eliminar el Video ID: "+ props.id+ "."}><DeleteForeverIcon/></TD>
                    <TD><AutoFixHighIcon/></TD>
                </tr>
        })}
            </tbody>
        </Tabla>

    );

};

export default TablaListado;

