import React from "react";
import { styled } from "@mui/system";
import { Button, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import logo from "../../img/logo.png";
import { ColoresJulioFlix } from "../../global";

const ContenedorFooter = styled("footer")({
  paddingTop: "27px",
  paddingRight: "40px",
  paddingBottom: "20px",
  paddingLeft: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderTop: "1px solid #DC1A28",
  backgroundColor: ColoresJulioFlix.fondo,
  userSelect: "none",
});

const ContenedorBotones = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "6px",
  gap: "13px",
});

const Logo = styled("img")({
  width: "150px",
  height: "40px",
});

const Disclaimer = styled("span")({
  fontFamily: "Roboto",
  fontWeight: "bold",
  textAlign: "center",
});

const Footer = () => {
  return (
    <ContenedorFooter>
      <a
        href="./index.html"
        title="Click to refresh"
      >
        <Logo src={logo} alt="Logo JulioFlix" />
      </a>
      <Disclaimer>
        <Link
          title="Visit my portfolio"
          color={ColoresJulioFlix.textos}
          underline="none"
          href="https://www.julioreyes.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.julioreyes.dev
        </Link>
        <ContenedorBotones>
          <Button
            variant="text"
            title="LinkedIn"
            href="https://www.linkedin.com/in/jjrh92/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: ColoresJulioFlix.textos }} />
          </Button>
          <Button
            variant="text"
            title="Github"
            href="https://www.github.com/jjrh92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: ColoresJulioFlix.textos }} />
          </Button>
          <Button
            variant="text"
            title="Telegram"
            href="https://t.me/jjrh92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon sx={{ color: ColoresJulioFlix.textos }} />
          </Button>
        </ContenedorBotones>
      </Disclaimer>
    </ContenedorFooter>
  );
};

export default Footer;
