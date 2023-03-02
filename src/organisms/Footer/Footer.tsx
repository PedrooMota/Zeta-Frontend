
/////////// IMPORTAÇÃO DO CSS

import { Link } from 'react-router-dom';


const Footer = () =>{
    return (

           
        // <!-- FOOTER -->
        <footer className="container-fluid bg-dark-color" id="footer">
          <div className="container">
            <div className="row">
              {/* <!-- FOOTER TOP --> */}
              <div className="col-12" id="footer-top">
                <div className="row justify-content-between">
                  <div className="col-4">
                    <h2>
                      Zeta
                    </h2>
                  </div>

                </div>
              </div>
              {/* <!-- FOOTER DETAILS --> */}
              <div className="col-12" id="footer-details">
                <div className="row">
                  <div className="col-12 col-md-4" id="news-container">
                    <h4>Fique por dentro das novidades</h4>
                    <p className="secondary-color">
                      Inscreva-se para saber tudo em primeira mão:
                    </p>
                    <form>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Digite o seu e-mail"/>
                        </div>
                        <a href="/" className="btn2">Inscrever</a>
                    </form>
                  </div>
                  <div className="col-12 col-md-4" id="contact-container">
                    <h4>Formas de contato</h4>
                    {/* ====== UTILIZEI MEIOS DE CONTATO FICTICIOS ==== */}
                    <p className="secondary-color">(12)9999-9999</p>
                    <p className="secondary-color">zeta@example.com</p>
                  </div>
                  <div className="col-12 col-md-4" id="links-container">
                    <div className="row">
                      <h4>Você pode buscar por:</h4>
                      <div className="col-6">
                        <ul className="list-unstyled">
                          <li><a href="/" className="secondary-color">Home</a></li>
                          <li><Link to='/quem-somos' className="secondary-color">Quem somos</Link></li>
                          <li><Link to='/missao-valores' className="secondary-color">Missão e Valores</Link></li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="list-unstyled">
                            <li>
                                <a href="#servicos" className="secondary-color">Soluções</a>
                            </li>
                            <li>
                                <a href="#contact" className="secondary-color">Contato</a>
                            </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- FOOTER BOTTOM --> */}
              <div className="col-12" id="footer-bottom">
                <div className="row justify-content-between">
                  <div className="col-12 col-md-3">
                    <p className="secondary-color">Zeta &copy; 2023</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </footer>
               
      
        
   
    )
}

export default Footer;