import React from "react";
import { styled } from '@mui/system';
import { Button, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import logo from "../../img/logo.png";
import { ColoresJulioFlix } from "../../global";

const ContenedorFooter = styled ("footer") ({

    paddingTop: "27px",
    paddingRight: "40px",
    paddingBottom: "27px",
    paddingLeft: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "1px solid #DC1A28",
    backgroundColor: ColoresJulioFlix.fondo,

});

const ContenedorBotones = styled("div") ({

    display: "flex",
    justifyContent: "center",
    marginTop: "6px",
    gap: "13px",

});

const Logo = styled ("img") ({

    width: "150px",
    height: "40px",

});

const Disclaimer = styled ("span") ({

    color: "#DC1A28",
    fontFamily: "Roboto",
    fontWeight: "bold",

});


const Footer = () => {

    return (
        <ContenedorFooter>
            <a href="./index.html" title="Haz click en este logo para refrescar la pagina"><Logo src={logo} alt="Logo JulioFlix"/></a>
            <Disclaimer>
                <Link color={ColoresJulioFlix.textos} underline="none" href="https://www.jjrh92.dev" target="_blank" rel="noopener noreferrer">Copyright © 2023 - jjrh92.dev</Link>
                <ContenedorBotones>
                    <Button variant="text" title="Contáctame por LinkedIn" href="https://www.linkedin.com/in/jjrh92/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: ColoresJulioFlix.textos }}/>
                    </Button>
                    <Button variant="text" title="Sígueme en Github" href="https://www.github.com/jjrh92" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ color: ColoresJulioFlix.textos }}/>
                    </Button>
                    <Button variant="text" title="Contáctame por Telegram" href="https://t.me/jjrh92" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon sx={{ color: ColoresJulioFlix.textos }}/>
                    </Button>
                </ContenedorBotones>
            </Disclaimer>
        </ContenedorFooter>
    );

};

export default Footer;