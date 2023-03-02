import { Link } from 'react-router-dom';



function Main() {
    function formValidate() {
        const inputName: any = document.getElementById('name');
        const inputEmail: any = document.getElementById('email');
        const inputTelefone: any = document.getElementById('telefone');

        let msg: string = `
        Nome: ${inputName.value}
        Email: ${inputEmail.value}
        Telefone: ${inputTelefone.value}
        Mensagem de ${inputName.value} enviada com sucesso! `
        alert(msg);
    }

    return (

<main>

    {/* ========= SECTION BANNER PRINCIPAL ILUSTRATIVO DA LANDING PAGE */}

    <section>
        <div className='container text-transition-slider' id='main-image-container'>
            <div className='main-image1 center-image'>
                <div className='main-image-info1'>
                    <h1>Zeta Tecnologia <br/> e Inovação</h1>
                    <h4 className="secondary-color mb-4">Sistemas Embarcados de ponta  <br/> a ponta que podem solucionar <br/>  seus problemas!</h4>
                </div>
            </div>
            <hr />
        </div>
    </section>

    {/* ======== SECTION CAMPO ATRATIVO - SOLUÇÕES ====== */}
    <section>
        <div id='servicos'>
            <div className="container mb-5 text-transition-slider" id="gallery-container">
                <div className="col-12">
                    <h1>Conheça nossas soluções</h1>
                </div>
                <div className="row gx-4">
                    <div className="col-12 col-md-6">
                        <div className="small-image-container center-image" id='img2'></div>
                        <h2>Compressores Inteligentes</h2>
                        <p className="secondary-color fs-4">Sistema projetado para oferecer um controle total e preciso sobre o compressor de ar. 
                            Ele permite que você ajuste a <strong>pressão, o fluxo e a temperatura do ar</strong> de forma fácil e intuitiva, 
                            garantindo que você tenha sempre o ar necessário para suas tarefas. </p>
                       
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="small-image-container center-image"id='img3'></div>
                        <h2>Tecnológicas e Inovadoras</h2>
                        <p className="secondary-color fs-4">Projetado também para ser <strong>durável e confiável</strong>, com 
                        componentes de alta qualidade que resistem a 
                        condições adversas. Além disso, ele é fácil de instalar e manter, com acesso 
                        fácil a todos os componentes para substituição ou manutenção.</p>
                       
                    </div>
                </div>
                <hr />
            </div>
          
        </div>  
    </section>  

    {/*========= SECTION BANNER ATRATIVO PARA INTERCALAR BEM A LANDING PAGE =============== */}
        <section>
            <div className='container text-transition-slider' id='main-image-container'>
                <div className='main-image2 center-image'>
                    <div className='main-image-info1'>
                        <h2>Nossa Localização!</h2>
                        <h5 className="secondary-color">Somos uma Startup integrada <br/> dentro do Parque Tecnológico.</h5>
                        <Link to={'/quem-somos'} className="btn btn1">Saber mais</Link>
                    </div>
                </div>
                <hr />
            </div>
        </section>
  
 
    {/* ===================== SECTION FORMULARIO PARA CONTATO  ============================ */}
    <section>
        <div id='contact'>
            <div className="container col-11 col-md-9 text-transition-slider" id="form-container">
                <div className="row gx-5">
                    <div className="col-md-6">
                        <h2>Gostaria que entrássemos em contato com você?</h2>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control"id='name' name='name' placeholder='Digite o seu nome' />
                                <label htmlFor="name" className='form-label'>Digite o seu nome</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control"id='email' name='email' placeholder='Digite o seu e-mail' />
                                <label htmlFor="email" className='form-label'>Digite o seu e-mail</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control"id='telefone' name='telefone' placeholder='Digite o seu telefone' />
                                <label htmlFor="telefone" className='form-label'>Digite o seu telefone</label>
                            </div>
                        
                            <button type='button' className='button' onClick={formValidate}>Enviar</button>
                        
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <img src="/contact2.svg" alt="Contato" className='img-fluid'/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>


  );
}

export default Main;
