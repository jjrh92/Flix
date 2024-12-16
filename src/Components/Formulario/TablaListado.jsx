import React, { useState, useEffect } from "react";
import { ColoresJulioFlix } from "../../global";
import { styled } from "@mui/system";
import { Link } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Swal from "sweetalert2";
import uuid from "react-uuid";
import axios from "axios";

const Tabla = styled("table")({
  backgroundColor: ColoresJulioFlix.fondo,
  color: ColoresJulioFlix.textos,
  display: "flex",
  justifyContent: "center",
  userSelect: "none",
  fontFamily: "Roboto",
});

const TD = styled("td")({
  border: "2px solid",
  textAlign: "center",
  padding: "30px",
});

const TablaListado = () => {
  const [DatosLista, setDatosLista] = useState([]);
  useEffect(() => {
    fetch("https://json-julioflix.onrender.com/Videos/")
      .then((response) => response.json())
      .then((data) => setDatosLista(data))
      .catch((err) => alert("JSON-SERVER is offline or try refreshing the page a few times: " + err));
  }, []);

  const EliminarVideo = (evento) => {
    axios
      .delete(
        `https://json-julioflix.onrender.com/Videos/${evento.currentTarget.id}`
      )

      .catch((error) => {
        console.error(error);
      });

    Swal.fire({
      timer: 2000,
      position: "center",
      icon: "success",
      title:
        "Video Deleted ID: " +
        evento.currentTarget.id +
        ". \nPage will refresh shortly.",
      iconColor: "#DC1A28",
      color: "#DC1A28",
      background: "#121212",
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const EditarVideo = (evento) => {
    let UsuarioDefineTitulo = prompt("Enter title for this video.");
    let UsuarioDefineIdYoutube = prompt(
      "Enter youtube url for this video. (Youtube format)",
      "i43tkaTXtwI"
    );

    axios.put(
      `https://json-julioflix.onrender.com/Videos/${evento.currentTarget.id}`,
      {
        TituloVideo: UsuarioDefineTitulo,
        IdYoutube: UsuarioDefineIdYoutube,
      }
    );

    Swal.fire({
      timer: 2000,
      position: "center",
      icon: "success",
      title: "Video successfully edited. \nPage will refresh shortly.",
      iconColor: "#DC1A28",
      color: "#DC1A28",
      background: "#121212",
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <Tabla>
      <tbody>
        <tr>
          <TD>ID (uuid)</TD>
          <TD>Title</TD>
          <TD>ID (Youtube)</TD>
          <TD>Delete</TD>
          <TD>Edit</TD>
        </tr>
        {DatosLista.map((props) => {
          return (
            <tr key={uuid()}>
              <TD>{props.id}</TD>
              <TD>{props.TituloVideo}</TD>
              <TD>
                <Link
                  title="Click to open video on a new tab"
                  sx={{ color: ColoresJulioFlix.textos }}
                  underline="none"
                  href={`https://youtu.be/${props.IdYoutube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.IdYoutube}
                </Link>
              </TD>
              <TD
                onClick={EliminarVideo}
                id={props.id}
                title={"Delete Video ID: " + props.id + "."}
              >
                <DeleteForeverIcon />
              </TD>
              <TD
                onClick={EditarVideo}
                id={props.id}
                title={"Edit Video ID: " + props.id + "."}
              >
                <AutoFixHighIcon />
              </TD>
            </tr>
          );
        })}
      </tbody>
    </Tabla>
  );
};

export default TablaListado;
