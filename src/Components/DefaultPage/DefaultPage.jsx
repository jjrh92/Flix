import { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Carousel from '../Carousel/Carousel/Carousel';
import Formulario from "../Formulario/Formulario";
import "../../reset.css";

function DefaultPage() {

  const [mostrarFormulario, actualizarMostrar] = useState (true);

  const cambiarMostrar = () => {

    actualizarMostrar (!mostrarFormulario);

  }

  // Lista de Categorias

  let categorias = [

    "Front-End",
    "Back-End",
    "Innovación & Gestión",
    "Custom",
    
  ];

  return (

    <div className="DefaultPage">

      <Header cambiarMostrar={cambiarMostrar}/>
      { mostrarFormulario === false ? <div></div> : <Banner />}
      { mostrarFormulario === false ? <div></div> : <Carousel />}
      {/* <Banner />
      <Carousel /> */}
      { mostrarFormulario === false ? <Formulario/> : <div></div>}
      <Footer />

    </div>

  );

}

export default DefaultPage;