import React from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../global";

const Contenedor = styled ("div") ({

    border: "1px solid",
    borderColor: ColoresJulioFlix.textos,
    display: "flex",

}); 

const Video = ({titulo, id}) => {

    return (

        <Contenedor>
            <iframe width="360" height="200" src={`https://www.youtube.com/embed/${id}`} title={titulo}/>
        </Contenedor>
        

    )

}

export default Video;