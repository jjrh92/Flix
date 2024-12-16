import React from "react";
import { styled } from "@mui/system";
import { ColoresJulioFlix } from "../../global";
import banner from "../../img/banner.png";
import Video from "../Carousel/VideoCard/VideoCard";

const ContenedorBanner = styled("section")({
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
  backgroundImage: `url(${banner})`,
  backgroundColor: ColoresJulioFlix.fondo,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  borderBottom: "1px solid",
  borderRight: "1px solid",
  borderColor: ColoresJulioFlix.textos,
});

const H1Hero = styled("h1")({
  color: "#F5F5F5",
  fontFamily: "Roboto",
  fontSize: "46px",
  lineHeight: "54px",
  fontWeight: "400",
});

const TextoHero = styled("p")({
  color: "#F5F5F5",
  fontFamily: "Roboto",
  fontSize: "18px",
  lineHeight: "21px",
  maxWidth: "600px",
  fontWeight: "500",
  paddingTop: "10px",
});

const ContenedorVideoHeader = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  maxWidth: "100%",
  justifyContent: "flex-end",
});

const ContenedorTextos = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "end",
  textAlign: "start",
});

const Hero = styled("div")({
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
          <H1Hero>Concorde</H1Hero>
          <TextoHero>
            Webapp for custom video playlist via CRUD Operations, If you want to
            add a video to the list you can click on the "New Video" button.
            This project uses MUI, JSONServer, AXIOS, SweetAlert & uuid.
          </TextoHero>
        </ContenedorTextos>

        <ContenedorVideoHeader>
          <Video TituloVideo={"Concorde Venezuela"} IdYoutube={"s2nW-6c-E8I"} />
        </ContenedorVideoHeader>
      </Hero>
    </ContenedorBanner>
  );
};

export default Banner;
