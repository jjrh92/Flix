import React from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../../global";
import "../../../data/datos-iniciales.json"
import Video from "../VideoCard/VideoCard";

// Aca importaremos el Swiper que nos ayudara con el efecto del slider para videos



const ContenedorSlider = styled ("section") ({

    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingLeft: "40px",
    paddingRight: "40px",
    backgroundColor: ColoresJulioFlix.fondo,
    
});

const ContenedorCategoria = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingLeft: "40px",
    paddingRight: "40px",
    backgroundColor: ColoresJulioFlix.fondo,
    justifyContent: "center",
    alignItems: "center",
    
});

const SliderJulioFlix = () => {

    return (

        <ContenedorSlider>
            <ContenedorCategoria>


            </ContenedorCategoria>
        </ContenedorSlider>


    );

};

export default SliderJulioFlix;