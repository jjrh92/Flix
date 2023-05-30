import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.png"
import { Button, Link } from "@mui/material";

const StyledHeader = styled.header`
    background-color: #121212;
    padding-top: 27px;
    padding-right: 40px;
    padding-bottom: 27px;
    padding-left: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #DC1A28;
`;

const Logo = styled.img`
    width: 150px;
    height: 40px;
`;

const Header = () => {

    return (

        <StyledHeader>
            <Link href="./index.html" title="Haz click en este logo para refrescar la pagina"><Logo src={logo} alt="Logo JulioFlix"/></Link>
            <Button variant="outlined" href="" size="medium" color="error">Nuevo Video</Button>
        </StyledHeader>

    );

};

export default Header;