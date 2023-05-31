import React from "react";
import { Button } from "@mui/material";

const Boton = ({funcion, texto}) => {

    return (

        <Button variant="outlined" onClick={funcion} size="medium" color="error">{texto}</Button>

    )


}

export default Boton;