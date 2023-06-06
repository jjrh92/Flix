import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Carousel from '../Carousel/Carousel/Carousel';

import "../../reset.css";

function DefaultPage() {
  return (
    <div className="App">

      <Header />
      <Banner />
      <Carousel />
      <Footer />

    </div>

  );

}

export default DefaultPage;