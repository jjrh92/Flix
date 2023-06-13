import React from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../../../global";
import Video from "../../VideoCard/VideoCard";
import "../Slider.css";

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


const SliderFrontEnd = (props) => {

    return (

        <ContenedorCategoria>
            <ContenedorTextosCategoria>
                <H1Categoria style={{color: `${props.ColorTitulo}`}}>{props.TextoTitulo}</H1Categoria>
                <SubTexto>{props.TextoSubtitulo}</SubTexto>
            </ContenedorTextosCategoria>
            <ContenedorVideos>
                <Video titulo={props.Video1Titulo} id={props.Video1ID} />
                <Video titulo={props.Video2Titulo} id={props.Video2ID} />
                <Video titulo={props.Video3Titulo} id={props.Video3ID} />
                <Video titulo={props.Video4Titulo} id={props.Video4ID} />
            </ContenedorVideos>
        </ContenedorCategoria> 

    );

};

export default SliderFrontEnd;