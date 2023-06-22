import React, { useEffect, useState } from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../../global";
import Slider from "../Slider/Slider";

const ContenedorSlider = styled ("section") ({

    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: ColoresJulioFlix.fondo,
    
});

const SliderJulioFlix = () => {

    const [DatosCategorias, setDatosCategorias] = useState([])
    useEffect( () => {

        fetch ("http://localhost:3001/Categorias/")
            .then (response => response.json())
            .then (data => setDatosCategorias(data))
            .catch (err => console.log (err))

    }, []);

    return (

        
        <ContenedorSlider>

            {DatosCategorias.map ((props) => {

                return <Slider
                    IdCategoria={props.IdCategoria}
                    TituloCategoria={props.TituloCategoria} 
                    SubtituloCategoria={props.SubtituloCategoria}
                    ColorCategoria={props.ColorCategoria} 
                />
                
            })};

        </ContenedorSlider>

    );

    

};

export default SliderJulioFlix;