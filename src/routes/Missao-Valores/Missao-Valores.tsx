import Header from '../../organisms/navbar/navbar';
import Footer from '../../organisms/Footer/Footer';


const MissaoValores = () =>{
    return (
        
       <div>
            <Header/>

            {/* ==== ROTA /MISSAO-VALORES COM AS INFORMAÇÕES PEDIDAS ===*/}

            <div id="sobre">
              <div className="container mb-5 text-transition-slider">
                  <div className="row">
                      <div className="col-md-4 text-center">
                          <img src="/Zeta_Logo.jpeg" className="img-fluid p-5" />
                      </div>
                      <div className="col-md-6 align-self-center">
                          <h1 className="title text-center">Missão e Valores</h1>
                          <p className='text-center fs-3'>
                            Oferecer serviços e soluções inovadores com utilização de tecnologia de alta qualidade e excelência, 
                            concretizando o retorno do investimento de nossos clientes.
                            Nossos valores são os princípios de relacionamentos transparentes e respeito a todos clientes e colaboradores.
                          </p>
                      </div>
                  </div>
                  <hr />
              </div>
          </div>

           {/* ========= BANNER PRINCIPAL ILUSTRATIVO DA LANDING PAGE */}
            <div className='container block text-transition-slider' id='main-image-container'>
                <div className='main-image3 center-image'>
                    <div className='main-image-info1'>
                        <h1>Gostaria de entrar <br/> em contato?</h1>
                        <h5 className="secondary-color mb-4">Preencha nosso formulário para <br/> entrarmos em contato.</h5>
                        <a href="/" className="btn1">Preencher</a>
                    </div>
                </div>
            </div>

           
        <Footer/>
    </div>
    )
}

export default MissaoValores;