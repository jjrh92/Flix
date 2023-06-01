import React from "react";
import { Button } from "@mui/material";

const Boton = ({ejecutar, texto}) => {

    return (

        <Button variant="outlined" onClick={ejecutar} size="medium" color="error">{texto}</Button>

    )


}

export default Boton;