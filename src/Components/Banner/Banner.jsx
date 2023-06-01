import React from "react";
import styled from "styled-components";
import banner from "../../img/banner.png"

const ImagenBanner = styled.img`

    max-width: 100%;

`;

const ContenedorBanner = styled.section`


    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;

`;

const Banner = () => {

    return (


         <ContenedorBanner>
            <ImagenBanner src={banner} alt="Imagen de banner"/>
         </ContenedorBanner>



    );

};

export default Banner;