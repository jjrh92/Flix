import Logo from "../../img/logo.png"
import "../Header/Header.css"

const Header = () => {

    return (

        <div className="Header">
            <a href="index.html" rel="noopener noreferrer" title="Haz click en el logo para recargar la pagina.">
            <img src={Logo} alt="Logo JulioFlix " />
            </a>
        </div>

    );

};

export default Header;