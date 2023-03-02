import Header from '../../organisms/navbar/navbar';
import Footer from '../../organisms/Footer/Footer';


const QuemSomos = () =>{
    return (
             <div>                 
                <Header/>

                 {/* == ROTA /QUEM-SOMOS COM AS INFORMAÇÕES SOLICITADAS === */}
           
                 <section>
                    <div className="container mb-5 text-transition-slider">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img src="/Zeta_Logo.jpeg" className="img-fluid p-5" />
                            </div>
                            <div className="col-md-6 align-self-center order-md-2 order-1 mb-md-0 mb-4">
                                <h1 className="title text-center">Sobre a Zeta</h1>
                                <p className='text-center fs-3'>
                                    A Zeta é uma empresa de Tecnologia e Inovação que desenvolve um sistema embarcado 
                                    inteligente e inovador, para gestão de operação e manutenção preventiva e preditiva
                                    de compressores de ar que funcionará com integração e serviços em nuvem e inteligência artificial. 
                                </p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </section>

                 {/* ========= BANNER PRINCIPAL ILUSTRATIVO DA LANDING PAGE */}
                <div className='container block text-transition-slider' id='main-image-container'>
                    <div className='main-image3 center-image'>
                        <div className='main-image-info1'>
                            <h1>O que você achou <br/>sobre nós?</h1>
                            <h5 className="secondary-color">Projetamos sistemas inteligentes para<br/>
                            melhor experiência dos nossos clientes.</h5>
                            {/* <a href="#contato" className="btn btn1">Entre em Contato</a> */}
                        </div>
                    </div>
                </div>

               
            <br />
            
                 
                <Footer/>
        </div>

             

            
    )
}

export default QuemSomos;