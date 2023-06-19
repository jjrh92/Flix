import React, { useEffect, useState } from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../../global";
import SliderInterno from "./Interno/SliderInterno";
import uuid from "react-uuid";

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

        fetch ("http://localhost:3001/Categorias")
            .then (response => response.json())
            .then (data => setDatosCategorias(data))
            .catch (err => console.log (err))

    }, []);


    return (

        
        <ContenedorSlider>

            {DatosCategorias.map ((props) => {

                return <SliderInterno 
                    key={uuid()}
                    ColorCategoria={props.ColorCategoria} 
                    TituloCategoria={props.TituloCategoria} 
                    SubtituloCategoria={props.SubtituloCategoria} 
                />

            })};

        </ContenedorSlider>

    );

    

};

export default SliderJulioFlix;


// const SliderJulioFlix = () => {

//     return (

//         <ContenedorSlider>
//             {
//                 datosFrontEnd.map ((props) => {

//                 return <SliderInterno 
//                         ColorTitulo={props.color} 
//                         TextoTitulo={props.categoria} 
//                         TextoSubtitulo={props.texto} 
//                         Video1Titulo={props.video01.titulo} 
//                         Video1ID={props.video01.id} 
//                         Video2Titulo={props.video02.titulo} 
//                         Video2ID={props.video02.id} 
//                         Video3Titulo={props.video03.titulo} 
//                         Video3ID={props.video03.id} 
//                         Video4Titulo={props.video04.titulo} 
//                         Video4ID={props.video04.id} 
//                     />

//                 }) 
//             };
//             {
//                 datosBackEnd.map ((props) => {

//                     return <SliderInterno 
//                     ColorTitulo={props.color} 
//                     TextoTitulo={props.categoria} 
//                     TextoSubtitulo={props.texto} 
//                     Video1Titulo={props.video01.titulo} 
//                     Video1ID={props.video01.id} 
//                     Video2Titulo={props.video02.titulo} 
//                     Video2ID={props.video02.id} 
//                     Video3Titulo={props.video03.titulo} 
//                     Video3ID={props.video03.id} 
//                     Video4Titulo={props.video04.titulo} 
//                     Video4ID={props.video04.id} 
//                     />

//                 })

//             };
//             {
//                 datosGestion.map ((props) => {

//                     return <SliderInterno 
//                     ColorTitulo={props.color} 
//                     TextoTitulo={props.categoria} 
//                     TextoSubtitulo={props.texto} 
//                     Video1Titulo={props.video01.titulo} 
//                     Video1ID={props.video01.id} 
//                     Video2Titulo={props.video02.titulo} 
//                     Video2ID={props.video02.id} 
//                     Video3Titulo={props.video03.titulo} 
//                     Video3ID={props.video03.id} 
//                     Video4Titulo={props.video04.titulo} 
//                     Video4ID={props.video04.id} 
//                     />

//                 })

//             };

//             {
//                 datosCustom.map ((props) => {

//                     return <SliderInterno 
//                     ColorTitulo={props.color} 
//                     TextoTitulo={props.categoria} 
//                     TextoSubtitulo={props.texto} 
//                     Video1Titulo={props.video01.titulo} 
//                     Video1ID={props.video01.id} 
//                     Video2Titulo={props.video02.titulo} 
//                     Video2ID={props.video02.id} 
//                     Video3Titulo={props.video03.titulo} 
//                     Video3ID={props.video03.id} 
//                     Video4Titulo={props.video04.titulo} 
//                     Video4ID={props.video04.id} 
//                     />

//                 })

//             };

            

//         </ContenedorSlider>

//     );

    

// };