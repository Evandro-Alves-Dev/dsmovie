import { ReactComponent as GitHubIcon } from '../../assets/img/github.svg';
import './style.css'; 

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSmovie</h1>
                    <a href="https://github.com/Evandro-Alves-Dev/"></a>
                    <div className="dsmovie-contact-container">
                        <GitHubIcon />
                        <p>/devsuperior</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;