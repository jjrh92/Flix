import React, { useEffect, useState } from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../../global";
import Video from "../VideoCard/VideoCard";
import "./Slider.css";
import uuid from "react-uuid";

const ContenedorCategoria = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "30px",
    backgroundColor: ColoresJulioFlix.fondo,
    justifyContent: "center",
    alignItems: "start",
    
});

const ContenedorTextosCategoria = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "20px",
    
});

const H1Categoria = styled ("h1") ({

    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "35px",
    lineHeight: "41px",
    userSelect: "none",
    
});

const SubTexto = styled ("span") ({

    color: "#F5F5F5",
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: "18px",
    lineHeight: "21px",
    paddingLeft: "11px",
    userSelect: "none",
    
});

const ContenedorVideos = styled ("div") ({

    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    backgroundColor: ColoresJulioFlix.fondo,
    gap: "20px",
    width: "100%",
    paddingRight: "40px",
    
});


const Slider = (props) => {

    const [DatosVideos, setDatosVideos] = useState([])
    useEffect( () => {

        fetch ("http://localhost:3001/Videos")
            .then (response => response.json())
            .then (data => setDatosVideos(data))
            .catch (err => console.log (err))

    }, []);

    return (

        <ContenedorCategoria>
            <ContenedorTextosCategoria>
                <H1Categoria style={{color: `${props.ColorCategoria}`}}>{props.TituloCategoria}</H1Categoria>
                <SubTexto key={uuid()}>{props.SubtituloCategoria}</SubTexto>
            </ContenedorTextosCategoria>
            <ContenedorVideos>

            {DatosVideos.map ((props) => {

                return <Video

                    IdVideo={props.IdVideo}
                    IdCategoria={props.IdCategoria}
                    TituloVideo={props.TituloVideo}
                    IdYoutube={props.IdYoutube}
                
                />

            })};


            </ContenedorVideos>
        </ContenedorCategoria> 

    );

};

export default Slider;


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