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
    paddingBottom: "40px",
    backgroundColor: ColoresJulioFlix.fondo,
    justifyContent: "center",
    alignItems: "start",
    
});

const ContenedorTextosCategoria = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
    backgroundColor: ColoresJulioFlix.fondo,

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
    marginTop: "7px",
    
});

const ContenedorVideos = styled ("div") ({

    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    backgroundColor: ColoresJulioFlix.fondo,
    gap: "20px",
    width: "100%",
    paddingRight: "40px",
    paddingBottom: "5px",
    
});


const Slider = (props) => {

    const [DatosVideos, setDatosVideos] = useState([])
    useEffect( () => {

        fetch ("https://json-julioflix.onrender.com/Videos")
            .then (response => response.json())
            .then (data => setDatosVideos(data))
            .catch (err => alert ("No se ha podido conectar al JSON-SERVER: "+ err))

    }, []);

    return (

        <ContenedorCategoria>
            <ContenedorTextosCategoria>
                <H1Categoria style={{color: "#DC1A28"}}>Custom Category</H1Categoria>
                <SubTexto>Added by the Administrator</SubTexto>
            </ContenedorTextosCategoria>
            <ContenedorVideos IdCategoria={props.IdCategoria}>

            {DatosVideos.map ((props) => {



                return <Video
                    
                    key={uuid()}
                    id={props.id}
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

