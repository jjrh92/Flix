import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Carousel from '../Carousel/Carousel/Carousel';
import Formulario from "../Formulario/Formulario";

import "../../reset.css";

function DefaultPage() {
  return (
    <div className="App">

      <Header />
      <Banner />
      <Carousel />
      <Formulario />
      <Footer />

    </div>

  );

}

export default DefaultPage;