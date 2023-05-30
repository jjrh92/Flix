import React from "react";
import styled from "styled-components";
import { Button, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import logo from "../../img/logo.png"

const StyledFooter = styled.footer`
    background-color: #121212;
    padding-top: 27px;
    padding-right: 40px;
    padding-bottom: 27px;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #DC1A28;
`;

const ContenedorBotones = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6px;
    gap: 13px;
`;

const Logo = styled.img`
    width: 150px;
    height: 40px;
`;

const Disclaimer = styled.span`
    color: #DC1A28;
    font-family: Roboto;
    font-weight: bold;

    a {

        color: #DC1A28;

    }
`;

const Footer = () => {

    return (

        <StyledFooter>
            <a href="./index.html" title="Haz click en este logo para refrescar la pagina"><Logo src={logo} alt="Logo JulioFlix"/></a>
            <Disclaimer>
                <Link underline="none" href="https://www.jjrh92.dev" target="_blank" rel="noopener noreferrer">Copyright © 2023 - jjrh92.dev</Link>
                <ContenedorBotones>
                    <Button variant="text" title="Contáctame por LinkedIn" href="https://www.linkedin.com/in/jjrh92/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon/>
                    </Button>
                    <Button variant="text" title="Sígueme en Github" href="https://www.github.com/jjrh92" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon/>
                    </Button>
                    <Button variant="text" title="Contáctame por Telegram" href="https://t.me/jjrh92" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon/>
                    </Button>
                </ContenedorBotones>
            </Disclaimer>
        </StyledFooter>

    );

};

export default Footer;