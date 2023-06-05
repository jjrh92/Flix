import React from "react";
import logo from "../../img/logo.png"
import Boton from "../Boton/Boton";
import { Link } from "@mui/material";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../global";

const ContenedorHeader= styled ("header") ({

    backgroundColor: ColoresJulioFlix.fondo,
    paddingTop: "27px",
    paddingRight: "40px",
    paddingBottom: "27px",
    paddingLeft: "40px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid",
    borderColor: ColoresJulioFlix.textos,

});

const Logo= styled ("img") ({

    height: "40px",
    width: "150px",

});


const SubirNuevoVideo = () => {

    alert ("Subir Video Nuevo");

}

const Header = () => {

    return (

        <ContenedorHeader>
            <Link href="./index.html" title="Haz click en este logo para refrescar la pagina"><Logo src={logo} alt="Logo JulioFlix"/></Link>
            <Boton texto={"Nuevo Video"} ejecutar={SubirNuevoVideo}/>
        </ContenedorHeader>

    );

};

export default Header;