import React from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../../global";
import "../../../data/datos-iniciales.json"
import Video from "../VideoCard/VideoCard";


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
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: "40px",
    paddingRight: "40px",
    backgroundColor: ColoresJulioFlix.fondo,
    
});


const SliderJulioFlix = () => {

    return (

        <ContenedorSlider>
            <ContenedorCategoria>
            <Video titulo={"1"} id={""} />
            </ContenedorCategoria>
        </ContenedorSlider>


    );

};

export default SliderJulioFlix;