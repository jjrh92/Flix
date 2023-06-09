import React from "react";
import TextField from '@mui/material/TextField';

const CampoTexto = (props) => {
   
    return (

        <TextField
            required
            variant="filled"
            id={props.id}
            label={props.label}
            placeholder={props.placeholder}
            color="error"
            sx={{
                backgroundColor: "whitesmoke",
                width: "335px", 
                borderRadius: "10px 10px 0px 0px",
            }}
        />
        
    );

};

export default CampoTexto;