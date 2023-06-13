import React from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../../global";

const Contenedor = styled ("div") ({

    border: "1px solid",
    borderColor: ColoresJulioFlix.textos,
    display: "flex",

}); 

const Video = ({titulo, id,}) => {

    return (

        <Contenedor>
            <iframe width={"340"} height={"190"} src={`https://www.youtube.com/embed/${id}`} title={titulo}/>
        </Contenedor>
        

    )

}

export default Video;