import React from "react";
import { styled } from '@mui/system';
import SliderInterno from "./Interno/SliderInterno";
import { ColoresJulioFlix } from "../../../global";
import datosFrontEnd from "../../../data/FrontEnd";
import datosBackEnd from "../../../data/BackEnd";
import datosGestion from "../../../data/Gestion";
import datosCustom from "../../../data/Custom";

const ContenedorSlider = styled ("section") ({

    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: ColoresJulioFlix.fondo,
    
});

const SliderJulioFlix = () => {

    return (

        <ContenedorSlider>
            {
                datosFrontEnd.map ((props) => {

                return <SliderInterno 
                        ColorTitulo={props.color} 
                        TextoTitulo={props.categoria} 
                        TextoSubtitulo={props.texto} 
                        Video1Titulo={props.video01.titulo} 
                        Video1ID={props.video01.id} 
                        Video2Titulo={props.video02.titulo} 
                        Video2ID={props.video02.id} 
                        Video3Titulo={props.video03.titulo} 
                        Video3ID={props.video03.id} 
                        Video4Titulo={props.video04.titulo} 
                        Video4ID={props.video04.id} 
                    />

                }) 
            };
            {
                datosBackEnd.map ((props) => {

                    return <SliderInterno 
                    ColorTitulo={props.color} 
                    TextoTitulo={props.categoria} 
                    TextoSubtitulo={props.texto} 
                    Video1Titulo={props.video01.titulo} 
                    Video1ID={props.video01.id} 
                    Video2Titulo={props.video02.titulo} 
                    Video2ID={props.video02.id} 
                    Video3Titulo={props.video03.titulo} 
                    Video3ID={props.video03.id} 
                    Video4Titulo={props.video04.titulo} 
                    Video4ID={props.video04.id} 
                    />

                })

            };
            {
                datosGestion.map ((props) => {

                    return <SliderInterno 
                    ColorTitulo={props.color} 
                    TextoTitulo={props.categoria} 
                    TextoSubtitulo={props.texto} 
                    Video1Titulo={props.video01.titulo} 
                    Video1ID={props.video01.id} 
                    Video2Titulo={props.video02.titulo} 
                    Video2ID={props.video02.id} 
                    Video3Titulo={props.video03.titulo} 
                    Video3ID={props.video03.id} 
                    Video4Titulo={props.video04.titulo} 
                    Video4ID={props.video04.id} 
                    />

                })

            };

            {
                datosCustom.map ((props) => {

                    return <SliderInterno 
                    ColorTitulo={props.color} 
                    TextoTitulo={props.categoria} 
                    TextoSubtitulo={props.texto} 
                    Video1Titulo={props.video01.titulo} 
                    Video1ID={props.video01.id} 
                    Video2Titulo={props.video02.titulo} 
                    Video2ID={props.video02.id} 
                    Video3Titulo={props.video03.titulo} 
                    Video3ID={props.video03.id} 
                    Video4Titulo={props.video04.titulo} 
                    Video4ID={props.video04.id} 
                    />

                })

            };

            

        </ContenedorSlider>

    );

    

};

export default SliderJulioFlix;

{/* <SliderFrontEnd 
                ColorTitulo="#6BD1FF" 
                TextoTitulo="Front-End" 
                TextoSubtitulo="Formación Front-End de Alura."
                Video1Titulo="Pensar como programador"
                Video1ID="ov7vA5HFe6w"
                Video2Titulo="Pensar como programador"
                Video2ID="ov7vA5HFe6w"
                Video3Titulo="Pensar como programador"
                Video3ID="ov7vA5HFe6w"
                Video4Titulo="Pensar como programador"
                Video4ID="ov7vA5HFe6w"
            />
            <SliderBackEnd 
                ColorTitulo="#00C86F" 
                TextoTitulo="Back-End" 
                TextoSubtitulo="Formación Back-End de Alura."
                Video1Titulo="Pensar como programador"
                Video1ID="ov7vA5HFe6w"
                Video2Titulo="Pensar como programador"
                Video2ID="ov7vA5HFe6w"
                Video3Titulo="Pensar como programador"
                Video3ID="ov7vA5HFe6w"
                Video4Titulo="Pensar como programador"
                Video4ID="ov7vA5HFe6w"
            />
            <SliderGestion 
                ColorTitulo="#FE8C2A" 
                TextoTitulo="Innovación & Gestión" 
                TextoSubtitulo="Formación Integral de Alura."
                Video1Titulo="Pensar como programador"
                Video1ID="ov7vA5HFe6w"
                Video2Titulo="Pensar como programador"
                Video2ID="ov7vA5HFe6w"
                Video3Titulo="Pensar como programador"
                Video3ID="ov7vA5HFe6w"
                Video4Titulo="Pensar como programador"
                Video4ID="ov7vA5HFe6w"
            />
            <SliderCustom 
                ColorTitulo={ColoresJulioFlix.textos} 
                TextoTitulo="Agregados por el Autor" 
                TextoSubtitulo="Formación Integral de Alura."
                Video1Titulo="Pensar como programador"
                Video1ID="ov7vA5HFe6w"
                Video2Titulo="Pensar como programador"
                Video2ID="ov7vA5HFe6w"
                Video3Titulo="Pensar como programador"
                Video3ID="ov7vA5HFe6w"
                Video4Titulo="Pensar como programador"
                Video4ID="ov7vA5HFe6w"
/> */}