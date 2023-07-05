import React, { useState, useEffect } from "react";
import { ColoresJulioFlix } from "../../global";
import { styled } from '@mui/system';
import { Link } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Swal from "sweetalert2";
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

        Swal.fire ({

            timer: 2000,
            position: 'center',
            icon: 'success',
            title: "Video Eliminado ID: " +evento.currentTarget.id+ ". \nSe actualizara la pagina en breve.",
            iconColor: '#DC1A28',
            color: '#DC1A28',
            background: '#121212',
            showConfirmButton: false,

        })

        setTimeout(() => {

            window.location.reload();

        }, 2000);

    };

    const EditarVideo = evento => {

        let UsuarioDefineTitulo = prompt("Ingrese titulo nuevo para este video.");
        let UsuarioDefineIdYoutube = prompt("Ingrese URL de youtube para este video. (Formato Youtube 11 caracteres)", "i43tkaTXtwI");


        axios.put(`http://localhost:3001/Videos/${evento.currentTarget.id}`, {

			TituloVideo: UsuarioDefineTitulo,
			IdYoutube: UsuarioDefineIdYoutube,

        })

        Swal.fire ({

            timer: 2000,
            position: 'center',
            icon: 'success',
            title: "Video Editado con exito. \nSe actualizara la pagina en breve.",
            iconColor: '#DC1A28',
            color: '#DC1A28',
            background: '#121212',
            showConfirmButton: false,

        })

        setTimeout(() => {

            window.location.reload();

        }, 2000);


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
                    <TD><Link title="Presiona para abrir video en una pestaña nueva" sx={{color: ColoresJulioFlix.textos}} underline="none" href={`https://youtu.be/${props.IdYoutube}`} target="_blank" rel="noopener noreferrer">{props.IdYoutube}</Link></TD>
                    <TD onClick={EliminarVideo} id={props.id} title={"Eliminar el Video ID: "+ props.id+ "."}><DeleteForeverIcon/></TD>
                    <TD onClick={EditarVideo} id={props.id} title={"Editar el Video ID: "+ props.id+ "."}><AutoFixHighIcon/></TD>
                </tr>
        })}
            </tbody>
        </Tabla>

    );

};

export default TablaListado;

