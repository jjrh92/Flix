import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "../../reset.css";
import Banner from '../../Components/Banner/Banner';

function DefaultPage() {
  return (
    <div className="App">

      <Header />
      <Banner />
      <Footer />

    </div>

  );

}

export default DefaultPage;