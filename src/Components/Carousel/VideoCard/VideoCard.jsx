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

const Video = ({titulo, id,}) => {

    return (

        <Contenedor>
            <Iframe src={`https://www.youtube.com/embed/${id}`} title={titulo} allowFullScreen/>
        </Contenedor>
        

    )

}

export default Video;