import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import foto1 from '../../Assets/foto1.jpg'
import logoInstagram from '../../Assets/icons8-instagram.svg'
import logoGithub from '../../Assets/icons8-github.svg'
import logoFacebook from '../../Assets/icons8-facebook.svg'
import logoPhone from '../../Assets/icons8-Phone.svg'
import logoGmail from '../../Assets/icons8-Gmail.svg'
import logoReact from '../../Assets/icons8-React.svg'
import logoCss from '../../Assets/icons8-css.svg'
import logoHtml from '../../Assets/icons8-html.svg'
import logoJavascript from '../../Assets/icons8-javascript.svg'
import logoGoogleSites from '../../Assets/icons8-google-sites.svg'

const Home = () => {

    return (
      <Layout>
        <main className="bg-slate-400 h-full w-full">
            <div className="flex flex-col-reverse items-center sm:flex-row">
                <div className="flex flex-col items-center h-full w-full">
                    <h2 className="font-bold text-6xl text-slate-200 text-center px-8">
                        Daniel Velásquez
                    </h2>
                    <h3 className="font-bold text-4xl text-slate-300 text-center">
                        Frontend Developer
                    </h3>
                </div>
                <figure className="my-10 mr-0 sm:mr-20">
                    <img 
                        src={foto1} 
                        alt="Foto de Daniel Velásquez"
                        className="h-full w-40 rounded-full border-2 border-separate shadow-md"
                    />
                </figure>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-around sm:items-start items-center m-10">
                <div className="flex flex-col sm:w-1/4 w-full mb-4">
                    <h3 className="font-bold text-2xl text-center sm:text-left mb-4">Projects</h3>
                    <a 
                        className="pl-4 font-semibold text-center sm:text-left" 
                        href="https://dnyvelasquez.github.io/babyyoda/"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Baby Yoda Game
                    </a>
                    <p className='pl-4 text-slate-100 ml-4 text-sm text-center sm:text-left'>
                        A game made with pure CSS
                    </p>
                    <a 
                        className="pl-4 font-semibold text-center sm:text-left" 
                        href="https://dnyvelasquez.github.io/CMTS-Scripter/"
                        target="_blank" rel="noopener noreferrer"
                    >
                        CMTS-Scripter
                    </a>
                    <p className='pl-4 text-slate-100 ml-4 text-sm text-center sm:text-left'>
                        A project made with React.JS, Vite and TailwinCSS
                    </p>
                    <a 
                        className="pl-4 font-semibold text-center sm:text-left" 
                        href="https://dnyvelasquez.github.io/dv-shopp/"
                        target="_blank" rel="noopener noreferrer"
                    >
                        DV-Shopp (ecomerce)
                    </a>
                    <p className='pl-4 text-slate-100 ml-4 text-sm text-center sm:text-left'>
                        A project made with React.JS, Vite and TailwinCSS
                    </p>
                </div>
                <div className="flex flex-col sm:w-1/4 w-full mb-4 text-center sm:text-left">
                    <h3 className="font-bold text-2xl mb-4">Contact</h3>                    
                    <a 
                        className="pl-4 font-semibold flex  self-center sm:self-start" 
                        href="https://github.com/dnyvelasquez"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img 
                            src={logoGithub} 
                            alt="Logo Github" 
                            className="h-6 w-6 mr-1"
                        />
                        @dnyvelasquez
                    </a>
                    <a 
                        className="pl-4 font-semibold flex  self-center sm:self-start" 
                        href="https://intagram.com/dny.velasquez"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img 
                            src={logoInstagram} 
                            alt="Logo Instagram" 
                            className="h-6 w-6 mr-1"
                        />
                        @dny.velasquez
                    </a>
                    <a 
                        className="pl-4 font-semibold flex  self-center sm:self-start" 
                        href="https://facebook.com/dannyelhito"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img 
                            src={logoFacebook} 
                            alt="Logo Facebook" 
                            className="h-6 w-6 mr-1 text-center"
                        />
                        @dannyelhito
                    </a>
                    <a 
                        className="pl-4 font-semibold flex self-center sm:self-start" 
                        href="/"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img 
                            src={logoPhone} 
                            alt="Logo Phone" 
                            className="h-6 w-6 mr-1"
                        />
                        +57 3004439348
                    </a>
                    <a 
                        className="pl-4 font-semibold flex self-center sm:self-start" 
                        href="mailto:dny.velasquez@gmail.com"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img 
                            src={logoGmail} 
                            alt="Logo Gmail" 
                            className="h-6 w-6 mr-1"
                        />
                        dny.velasquez@gmail.com
                    </a>
                </div>
                <div className="flex flex-col sm:w-1/4 w-full mb-4 text-center sm:text-left">
                    <h3 className="font-bold text-2xl mb-4">About</h3>
                    <p className="pl-4 font-semibold flex self-center sm:self-start">
                        <img 
                            src={logoGoogleSites} 
                            alt="Logo Google Sites" 
                            className="h-6 w-6 mr-1"
                        />
                        IT engineer
                    </p>
                    <p className="pl-4 font-semibold flex self-center sm:self-start">
                        <img 
                            src={logoJavascript} 
                            alt="Logo Javascript" 
                            className="h-6 w-6 mr-1"
                        />
                        Javascript
                    </p>
                    <p className="pl-4 font-semibold flex self-center sm:self-start">
                        <img 
                            src={logoHtml} 
                            alt="Logo HTML" 
                            className="h-6 w-6 mr-1"
                        />
                        HTML
                    </p>
                    <p className="pl-4 font-semibold flex self-center sm:self-start">
                        <img 
                            src={logoCss} 
                            alt="Logo CSS" 
                            className="h-6 w-6 mr-1"
                        />
                        CSS
                    </p>
                    <p className="pl-4 font-semibold flex self-center sm:self-start">
                        <img 
                            src={logoReact} 
                            alt="Logo React.JS" 
                            className="h-6 w-6 mr-1 "
                        />
                        React.JS
                    </p>
                    <Link to={'/Portfolio/courses'} className="pl-4 font-semibold flex self-center sm:self-start">
                        <img 
                            src={logoGoogleSites} 
                            alt="Logo Google Sites" 
                            className="h-6 w-6 mr-1 "
                        />
                        View development courses
                    </Link>
                </div>
            </div>
        </main>
      </Layout>
    )
  }
  
  export default Home;
  