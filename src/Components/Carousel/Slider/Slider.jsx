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

    const [datosFrontEnd, setDatosFrontEnd] = useState([])
    useEffect( () => {

        fetch ("https://json-julioflix.onrender.com/FrontEnd")
            .then (response => response.json())
            .then (data => setDatosFrontEnd(data))
            .catch (err => console.log (err))

    }, []);

    const [datosBackEnd, setDatosBackEnd] = useState([])
    useEffect( () => {

        fetch ("https://json-julioflix.onrender.com/BackEnd")
            .then (response => response.json())
            .then (data => setDatosBackEnd(data))
            .catch (err => console.log (err))

    }, []);

    const [datosGestion, setDatosGestion] = useState([])
    useEffect( () => {

        fetch ("https://json-julioflix.onrender.com/Gestion")
            .then (response => response.json())
            .then (data => setDatosGestion(data))
            .catch (err => console.log (err))

    }, []);

    const [datosCustom, setDatosCustom] = useState([])
    useEffect( () => {

        fetch ("https://json-julioflix.onrender.com/Custom")
            .then (response => response.json())
            .then (data => setDatosCustom(data))
            .catch (err => alert ("No se ha podido cargar el JSON. Contacte al Admin.", err))

    }, []);

    return (

        
        <ContenedorSlider>

            {datosFrontEnd.map ((props) => {

                return <SliderInterno 
                    key={uuid()}
                    ColorTitulo={props.ColorCategoria} 
                    TextoTitulo={props.TituloCategoria} 
                    TextoSubtitulo={props.SubtituloCategoria} 
                    Video1Titulo={props.Video01.titulo} 
                    Video01ID={props.Video01.id} 
                    Video02Titulo={props.Video02.titulo} 
                    Video02ID={props.Video02.id} 
                    Video03Titulo={props.Video03.titulo} 
                    Video03ID={props.Video03.id} 
                    Video04Titulo={props.Video04.titulo} 
                    Video04ID={props.Video04.id} 
                />

            })};

            {datosBackEnd.map ((props) => {

                return <SliderInterno 
                    key={uuid()}
                    ColorTitulo={props.ColorCategoria} 
                    TextoTitulo={props.TituloCategoria} 
                    TextoSubtitulo={props.SubtituloCategoria} 
                    Video1Titulo={props.Video01.titulo} 
                    Video01ID={props.Video01.id} 
                    Video02Titulo={props.Video02.titulo} 
                    Video02ID={props.Video02.id} 
                    Video03Titulo={props.Video03.titulo} 
                    Video03ID={props.Video03.id} 
                    Video04Titulo={props.Video04.titulo} 
                    Video04ID={props.Video04.id} 
                />

            })};

            {datosGestion.map ((props) => {

                return <SliderInterno 
                    key={uuid()}
                    ColorTitulo={props.ColorCategoria} 
                    TextoTitulo={props.TituloCategoria} 
                    TextoSubtitulo={props.SubtituloCategoria} 
                    Video1Titulo={props.Video01.titulo} 
                    Video01ID={props.Video01.id} 
                    Video02Titulo={props.Video02.titulo} 
                    Video02ID={props.Video02.id} 
                    Video03Titulo={props.Video03.titulo} 
                    Video03ID={props.Video03.id} 
                    Video04Titulo={props.Video04.titulo} 
                    Video04ID={props.Video04.id} 
                />

            })};

            {datosCustom.map ((props) => {

                return <SliderInterno 
                    key={uuid()}
                    ColorTitulo={props.ColorCategoria} 
                    TextoTitulo={props.TituloCategoria} 
                    TextoSubtitulo={props.SubtituloCategoria} 
                    Video1Titulo={props.Video01.titulo} 
                    Video01ID={props.Video01.id} 
                    Video02Titulo={props.Video02.titulo} 
                    Video02ID={props.Video02.id} 
                    Video03Titulo={props.Video03.titulo} 
                    Video03ID={props.Video03.id} 
                    Video04Titulo={props.Video04.titulo} 
                    Video04ID={props.Video04.id} 
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