import Layout from "../../Components/Layout";
import { useState } from "react";
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

    const [isbbyodaHidden, setbbyodaHidden] = useState(true)
    const [iscmtssHidden, setCmtssHidden] = useState(true)

    return (
      <Layout>
        <div className="bg-slate-400 h-screen w-full">
            <div className="flex items-center">
                <div className="flex flex-col items-center h-full w-full">
                    <h2 className="font-bold text-6xl text-slate-200">
                        Daniel Velásquez
                    </h2>
                    <h3 className="font-bold text-4xl text-slate-300">
                        Frontend Developer
                    </h3>
                </div>
                <figure className="my-10 mr-20">
                    <img 
                        src={foto1} 
                        alt="foto de Daniel Velásquez"
                        className="h-full w-40 rounded-full border-2 border-separate shadow-md"
                    />
                </figure>
            </div>
            <div className="flex justify-around m-10 gap-2">
                <div className="flex flex-col w-1/4">
                    <h3 className="font-bold text-2xl">Projects</h3>
                    <a 
                        className="pl-4 font-semibold" 
                        href="https://dnyvelasquez.github.io/babyyoda/"
                        target="_blank" rel="noopener noreferrer"
                        onMouseOver={() => {setbbyodaHidden(false)}}
                        onMouseLeave={() => {setbbyodaHidden(true)}}
                    >
                        Baby Yoda Game
                    </a>
                    <p className={`pl-4 ${isbbyodaHidden ? 'hidden' : ''} text-slate-200 ml-4`}>
                        A game made with pure CSS
                    </p>
                    <a 
                        className="pl-4 font-semibold" 
                        href="https://dnyvelasquez.github.io/CMTS-Scripter/"
                        target="_blank" rel="noopener noreferrer"
                        onMouseOver={() => {setCmtssHidden(false)}}
                        onMouseLeave={() => {setCmtssHidden(true)}}
                    >
                        CMTS-Scripter
                    </a>
                    <p className={`pl-4 ${iscmtssHidden ? 'hidden' : ''} text-slate-200 ml-4`}>
                        A project made with React.JS, Vite and TailwinCSS
                    </p>
                </div>
                <div className="flex flex-col w-1/4">
                    <h3 className="font-bold text-2xl">Contact</h3>                    
                    <a 
                        className="pl-4 font-semibold flex" 
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
                        className="pl-4 font-semibold flex" 
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
                        className="pl-4 font-semibold flex" 
                        href="https://facebook.com/dannyelhito"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img 
                            src={logoFacebook} 
                            alt="Logo Facebook" 
                            className="h-6 w-6 mr-1"
                        />
                        @dannyelhito
                    </a>
                    <a 
                        className="pl-4 font-semibold flex" 
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
                        className="pl-4 font-semibold flex" 
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
                <div className="flex flex-col w-1/4">
                    <h3 className="font-bold text-2xl">About</h3>
                    <p className="pl-4 font-semibold flex">
                        <img 
                            src={logoGoogleSites} 
                            alt="Logo Javascript" 
                            className="h-6 w-6 mr-1"
                        />
                        IT engineer
                    </p>
                    <p className="pl-4 font-semibold flex">
                        <img 
                            src={logoJavascript} 
                            alt="Logo Javascript" 
                            className="h-6 w-6 mr-1"
                        />
                        Javascript
                    </p>
                    <p className="pl-4 font-semibold flex">
                        <img 
                            src={logoHtml} 
                            alt="Logo HTML" 
                            className="h-6 w-6 mr-1"
                        />
                        HTML
                    </p>
                    <p className="pl-4 font-semibold flex">
                        <img 
                            src={logoCss} 
                            alt="Logo CSS" 
                            className="h-6 w-6 mr-1"
                        />
                        CSS
                    </p>
                    <p className="pl-4 font-semibold flex">
                        <img 
                            src={logoReact} 
                            alt="Logo React.JS" 
                            className="h-6 w-6 mr-1"
                        />
                        React.JS
                    </p>
                </div>
            </div>
        </div>
      </Layout>
    )
  }
  
  export default Home;
  