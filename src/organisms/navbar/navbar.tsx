
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <nav className="container">
                    <Link to='/' className="navbar-brand logo"><h1 className='display-3'><b>Zeta</b></h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto textNav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link " aria-current="page"><b>Home</b></Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#servicos"><b>Soluções</b></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact"><b>Contato</b></a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle textNav" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>Sobre nós</b>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/quem-somos' className="dropdown-item "><h4><b>Quem somos</b></h4></Link></li>
                                    <li><Link to='/missao-valores' className="dropdown-item "><h4><b>Missão e Valores</b></h4></Link></li>
                                </ul>
                                
                            </li>

                            <ul className='navbar-nav sm-icons'>
                                <li><a className='nav-link'  target="_blank" href="https://www.facebook.com"><i className="bi bi-facebook"></i></a></li>
                                <li><a className='nav-link'  target="_blank" href="https://www.instagram.com"><i className="bi bi-instagram"></i></a></li>
                                <li><a className='nav-link'  target="_blank" href="https://www.linkedin.com"><i className="bi bi-linkedin"></i></a></li>
                            </ul>
                            
                        </ul>
                    </div>

                </nav>
            </nav>
           
        </header>
)}

export default Header;