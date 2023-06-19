import React from "react";
import { styled } from '@mui/system';
import { ColoresJulioFlix } from "../../global";
import banner from "../../img/banner.png"
import Video from "../Carousel/VideoCard/VideoCard";

const ContenedorBanner = styled ("section") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    backgroundImage: `url(${banner})`,
    backgroundColor: ColoresJulioFlix.fondo,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    height: "100vh",
    borderBottom: "1px solid",
    borderColor: ColoresJulioFlix.textos,

});

const H1Hero = styled ("h1") ({

    color: ColoresJulioFlix.textos,
    fontFamily: "Roboto",
    fontSize: "46px",
    lineHeight: "54px",
    fontWeight: "400",

});

const TextoHero = styled ("p") ({

    color: ColoresJulioFlix.textos,
    fontFamily: "Roboto",
    fontSize: "18px",
    lineHeight: "21px",
    maxWidth: "600px",
    fontWeight: "500",
    paddingTop: "10px",

});

const ContenedorVideoHeader = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    height: "100vh",
    maxWidth: "100%",
    justifyContent: "flex-end",

});

const ContenedorTextos = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "end",
    textAlign: "start",

});

const Hero = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "-20px",
    justifyContent: "space-between",
    userSelect: "none",

});

const Banner = () => {

    return (

        <ContenedorBanner>
            
            <Hero>

                <ContenedorTextos>
                    <H1Hero>Challenge React</H1Hero>
                    <TextoHero>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación de React.</TextoHero>
                </ContenedorTextos>
    
                <ContenedorVideoHeader>
                    <Video TituloVideo={"Pensar como programador"} IdYoutube={"ov7vA5HFe6w"} />
                </ContenedorVideoHeader>

            </Hero>

        </ContenedorBanner>

    );

};

export default Banner;