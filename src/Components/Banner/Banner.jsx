import React from "react";
import { styled } from '@mui/system';
import banner from "../../img/banner.png"
import { ColoresJulioFlix } from "../../global";

const ContenedorBanner = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${banner})`,
    backgroundColor: ColoresJulioFlix.fondo,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    maxWidth: "100%",
});

const Banner = () => {

    return (

        <ContenedorBanner>

        </ContenedorBanner>

    );

};

export default Banner;