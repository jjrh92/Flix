import React from "react";
import { Button } from "@mui/material";

const Boton = ({link, texto}) => {

    return (

        <Button variant="outlined" href={link} size="medium" color="error">{texto}</Button>

    )


}

export default Boton;