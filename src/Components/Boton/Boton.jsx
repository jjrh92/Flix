import React from "react";
import { Button } from "@mui/material";

const Boton = ({ejecutar, texto, link}) => {

    return (

        <Button variant="outlined" onClick={ejecutar} href={link} size="large" color="error" rel="noopener noreferrer">{texto}</Button>

    )


}

export default Boton;