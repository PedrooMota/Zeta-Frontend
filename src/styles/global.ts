import {createGlobalStyle} from 'styled-components'


const globalStyle = createGlobalStyle`

/////////////// REUTILIZAVEIS NO CÓDIGO //////////////////////
.text-transition-slider {

  animation: 3.5s anim-lineUp ease-out;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateX(-80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
 {
  font-weight: 700;
}

p {
  font-weight: 500;
}

.textNav {
  color: var(--primary);
  font-size: 30px
}

b{
  width: 22px
}


.block {
  margin-bottom: 120px;
}

.center-image {
  background-size: cover;
  background-position: center;
}

body{
  background-color: white;
}


//////////////////


//////////// BUTTONS //////

.btn1{

  padding: 17px 40px;
  border-radius: 50px;
  border: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all .5s ease;
  border-radius: 1.75rem;
  color: #f7f7f7;
  background-color: black;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: all .6s ease;
}

.btn1:hover {
  letter-spacing: 3px;
  background-color: hsl(220deg 80% 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(200 260 290) 0px 7px 29px 0px;
}

.btn1:active{
  letter-spacing: 3px;
  background-color: hsl(261deg 80% 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
  transform: translateY(10px);
  transition: 100ms;
}

//// botão do footer ///////
.btn2{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 3.5rem;
  width: 9rem;
  padding: 7px 18px;
  border: 0;
  border-radius: 1.75rem;
  color: black;
  background-color: white;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
}


.btn2:hover {
  background-color:white;
  color: black;
  cursor: pointer;
}
/////////////////

////////// botão do formulário de contato /////////////

button {
  padding: 17px 40px;
  border-radius: 50px;
  border: 0;
  background-color: black;
  color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all .5s ease;
}
 
button:hover {
  letter-spacing: 3px;
  background-color: hsl(0deg 0% 5%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(4 20 50) 0px 7px 15px 0px;
}
 
button:active {
  letter-spacing: 3px;
  background-color: hsl(261deg 80% 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
  transform: translateY(10px);
  transition: 100ms;
}

///////////////////


////////////////// HEADER ///////////////

ul {
  gap: 5px;
} 

li{

}

.nav-link{
  position: relative;
  display: inline-block;
}

.nav-link::before {
 content: '';
 position: absolute;
 left: 0;
 bottom: 0;
 width: 100%;
 height: 2px;
 background-color: #FFF;
 border-radius: 4px;
 scale: 0 1;
 transform-origin: left;
 transition: scale 0.25s;

}

.nav-link:hover::before{
  scale: 1;
}

//////////////////////////////



//////////// MAIN IMAGE ///////

.main-image1 {
  height: 450px;
  background-image: url(/banner1.jpg);
  margin-bottom: 50px;
  position: relative;
}

.main-image2 {
  height: 450px;
  background-image: url(/banner3.jpg);
  margin-bottom: 50px;
  position: relative;
}

.main-image3 {
  height: 450px;
  background-image:url(/banner2.jpg);
  margin-bottom: 50px;
  position: relative;
}

.main-image-info1{
  background-color: white;
  padding: 25px;
  position: absolute;
  left: 25px;
  bottom: 25px;
  border-radius: 10px;
}
///////////////////




//////////// SECTION SOLUÇÕES //////////

#img2 {
  background-image: url(/Compressor.png);
}

#img3 {
  background-image: url(/ImagemInovadora.jpg);
}

#gallery-container h1,
#gallery-container h2,
#gallery-container h3,
#gallery-container p{
  text-align: center;

}

#gallery-container h1,
#gallery-container .col-md-6,
#gallery-container .col-12 {
  margin-bottom: 60px;
}


.small-image-container {
  height: 250px;
  margin-bottom: 20px;

}

//////////////


//////// SECTION CONTATO  ///////

#contactForm h1 {
  text-align: center;
}

// SECTION FORM /////

#form-container {
  background-color: #FFF;
  border-radius: 20px;
  box-shadow: .5px 10px 15px rgba(0,0,0, .2);
  margin: 25px auto;
  padding: 25px;
}

#form-container h2 {
  font-weight: 900;
  margin-bottom: 30px;
}

#form-container a{
  color: #222;
  transition: .5s;
}

#form-container a:hover{
  color: #63B5FB
}

#form-container form {
  padding-bottom: 0;
}

#form-container .form-control {
  border: none;
  border-bottom: 1px solid #CCC;
  border-radius: 0
}

#form-container .form-control:focus {
  box-shadow: none;
}

#form-container .form-floating label {
  color: #CCC;
}

#form-container .form-floating > .form-control:focus~label {
  color: #222;
}

#form-container button[type="submit"]
{
  background-color: #63B5FB;
  border-color: #63B5FB;
}

/// IMAGE ///

.row.align-items-center {
  align-content: center;
  height: 100%;
  padding: 75px 0
}
.col-md-6.order-md-1{
  padding-top: 50px;
}


//////////////

//// media query ////
@media(min-width: 768px){
  #form-container {
    margin: 50px auto;
    padding: 50px;
  }

  .col-md-6.order-md-1{
    padding-top: 0;
  }
}

// ICONS

.sm-icons{
  flex-direction: row;
}

.sm-icons .nav-link{
  padding-right: 1rem;
}
  .bg-primary-color {
    background-color: #fff;
  }
  
  .bg-secondary-color {
    background-color: #ece8e2;
  }
  
  .bg-dark-color {
    background-color: #050505;
  }
  
  .primary-color {
    color: #050505;
  }
  
  .secondary-color {
    color: #7a7a7a;
  }


/* FOOTER TOP */
#footer {
  padding: 3em 2em;
}

#footer-top {
  margin-bottom: 2em;
}

#footer-top,
#footer-top i {
  color: #fff;
}

#social-icons {
  text-align: right;
}

#social-icons i {
  margin-right: 1em;
  font-size: 1.5em;
  cursor: pointer;
}

#social-icons i:hover {
  color: #7a7a7a;
}


/* FOOTER DETAILS */
#footer-details {
  margin-bottom: 3em;
}

#news-container,
#contact-container,
#links-container {
  padding: 0;
  border: 0;
  margin-bottom: 2em;
}

#footer-details h4 {
  color: #fff;
  margin-bottom: 1.5em;
}

#news-container input {
  border-radius: 0;
  border: none;
}

#links-container li {
  margin-bottom: 0.5em;
}

#links-container a {
  text-decoration: none;
}

#links-container a:hover {
  color: #fff;
}

/* FOOTER BOTTOM */
#footer-bottom {
  border-top: 1px solid #7a7a7a;
  padding-top: 2em;
}

#footer-bottom i {
  color: #e61e10;
}

@media (min-width: 768px) {
  #news-container {
    padding-right: 2em;
  }

  #contact-container {
    padding: 0 2em;
    border-left: 1px solid #7a7a7a;
    border-right: 1px solid #7a7a7a;
  }

  #links-container {
    padding-left: 2em;
  }
}

.img_home{
  width: 450px;
  height: 550px
}



/* MIN WIDTH */
@media (min-width: 992px) {
  
  .img_home{
    width: 350px;
    height: 450px
  }
  #header .nav-link {
    margin-left: 15px;
    margin-right: 15px;
  }
}

/* MAX MEDIUM */
@media (max-width: 991.98px) {
  
  .img_home{
    width: 270px;
    height: 350px
  }

  .img_banner{
   height: 331px;
   width: 300px
  }

  #header .navbar-brand img {
    max-width: 180px;
  }
  #header .navbar-collapse {
    width: 100%;
  }
  #contato .email img {
    width: 90px;
    top: -40px;
  }
}

@media (max-width: 767.98px) {

  .img_banner{
    width: 300px
    height: 600px;
   
   }
  .img_home{
    width: 300px;
    height: 400px
  }

  #servicos a.destaque .img-container {
    height: 120px;
  }
  #servicos a.destaque .img-container img {
    max-height: 120px;
  }
  #clientes .cliente-texto .imagem {
    padding: 10px 0 30px 0;
  }

  #clientes .cliente-texto .imagem img {
    max-width: 150px;
  }

  #contato .email {
    padding: 60px 30px 50px 30px;
  }
  #contato .email form {
    width: 100%;
    flex-direction: column;
  }
  #contato ul {
    padding-top: 30px;
    justify-content: center;
  }
}


`
export default globalStyle;