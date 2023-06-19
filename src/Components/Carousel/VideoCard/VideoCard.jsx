import React from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../../global";

const Contenedor = styled ("div") ({

    border: "1px solid",
    borderColor: ColoresJulioFlix.textos,
    display: "flex",

});

const Iframe = styled ("iframe") ({

    width: "340px",
    height: "190px",

});

const Video = ({IdVideo, IdCategoria,TituloVideo, IdYoutube,}) => {

    return (

        <Contenedor>
            <Iframe IdVideo={IdVideo} IdCategoria={IdCategoria} title={TituloVideo} src={`https://www.youtube.com/embed/${IdYoutube}`} allowFullScreen/>
        </Contenedor>
        

    )

}

export default Video;