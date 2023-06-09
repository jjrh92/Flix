import React from "react";
import { Button } from "@mui/material";

const Boton = ({ejecutar, texto, link, title, tipo}) => {

    return (

        <Button sx={{cursor:"unset",}} type={tipo} title={title} variant="outlined" onClick={ejecutar} href={link} size="large" color="error" rel="noopener noreferrer">{texto}</Button>

    )


}

export default Boton;