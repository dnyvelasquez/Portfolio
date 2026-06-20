import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import foto1 from '../../Assets/foto1.jpg';
import logoInstagram from '../../Assets/icons8-instagram.svg';
import logoGithub from '../../Assets/icons8-github.svg';
import logoFacebook from '../../Assets/icons8-facebook.svg';
import logoPhone from '../../Assets/icons8-phone.svg';
import logoGmail from '../../Assets/icons8-gmail.svg';
import logoReact from '../../Assets/icons8-react.svg';
import logoPython from '../../Assets/icons8-python.svg';
import logoCss from '../../Assets/icons8-css.svg';
import logoHtml from '../../Assets/icons8-html.svg';
import logoJavascript from '../../Assets/icons8-javascript.svg';
import logoGoogleSites from '../../Assets/icons8-google-sites.svg';
import logoLinkedIn from '../../Assets/icons8-linkedin.svg';

const projects = [
  {
    name: 'NFL Predictor',
    url: 'https://dnyvelasquez.github.io/nfl-predictor/',
    description: 'Recreational betting platform for American football. Made with Angular and a Supabase connection.',
  },
  {
    name: 'FIFA Predictor',
    url: 'https://dnyvelasquez.github.io/fifa-predictor/',
    description: 'Recreational betting platform for soccer. Made with Angular and a Supabase connection.',
  },
  {
    name: 'CMTS-Scripter',
    url: 'https://dnyvelasquez.github.io/CMTS-Scripter/',
    description: 'Platform to generate configuration scripts for different CMTS brands. Made with React.JS, Vite and TailwindCSS.',
  },
  {
    name: 'DV-Shopp (ecommerce)',
    url: 'https://dnyvelasquez.github.io/dv-shopp/',
    description: 'Ecommerce platform simulator. Made with React.JS, Vite and TailwindCSS.',
  },
];

const contacts = [
  { logo: logoGithub, alt: 'Logo Github', label: '@dnyvelasquez', href: 'https://github.com/dnyvelasquez' },
  { logo: logoLinkedIn, alt: 'Logo LinkedIn', label: 'daniel-velasquez-7a19bb1b8', href: 'https://linkedin.com/in/daniel-velasquez-7a19bb1b8' },
  { logo: logoInstagram, alt: 'Logo Instagram', label: '@dny.velasquez', href: 'https://instagram.com/dny.velasquez' },
  { logo: logoFacebook, alt: 'Logo Facebook', label: '@dannyelhito', href: 'https://facebook.com/dannyelhito' },
  { logo: logoPhone, alt: 'Logo Phone', label: '+57 3004439348', href: 'tel:+573004439348' },
  { logo: logoGmail, alt: 'Logo Gmail', label: 'dny.velasquez@gmail.com', href: 'mailto:dny.velasquez@gmail.com' },
];

const skills = [
  { logo: logoGoogleSites, alt: 'Logo Google Sites', label: 'IT engineer' },
  { logo: logoJavascript, alt: 'Logo Javascript', label: 'Javascript' },
  { logo: logoHtml, alt: 'Logo HTML', label: 'HTML' },
  { logo: logoCss, alt: 'Logo CSS', label: 'CSS' },
  { logo: logoReact, alt: 'Logo React.JS', label: 'React.JS' },
  { logo: logoPython, alt: 'Logo Python', label: 'Python' },
];

const Home = () => {

    return (
      <Layout>
        <main className="w-full h-full bg-gradient-to-b from-slate-700 to-slate-900">
            <section className="flex flex-col-reverse items-center sm:flex-row sm:justify-center gap-6 py-16 px-8">
                <div className="flex flex-col items-center sm:items-start h-full w-full sm:max-w-xl">
                    <h2 className="font-bold text-5xl sm:text-6xl text-white text-center sm:text-left">
                        Daniel Velásquez
                    </h2>
                    <h3 className="font-semibold text-2xl sm:text-3xl text-cyan-400 text-center sm:text-left mt-2">
                        Systems Engineer / Developer
                    </h3>
                </div>
                <figure className="my-6">
                    <img
                        src={foto1}
                        alt="Foto de Daniel Velásquez"
                        className="h-40 w-40 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
                    />
                </figure>
            </section>

            <div className="flex flex-col sm:flex-row sm:justify-around sm:items-start items-center gap-10 mx-auto max-w-6xl px-8 pb-16">
                <div className="flex flex-col sm:w-1/3 w-full gap-4">
                    <h3 className="font-bold text-2xl text-white text-center sm:text-left">Projects</h3>
                    {projects.map(({ name, url, description }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank" rel="noopener noreferrer"
                            className="block rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-colors p-4"
                        >
                            <p className="font-semibold text-cyan-400">{name}</p>
                            <p className="text-slate-300 text-sm mt-1">{description}</p>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col sm:w-1/3 w-full gap-3 items-center sm:items-start">
                    <h3 className="font-bold text-2xl text-white text-center sm:text-left mb-1">Contact</h3>
                    {contacts.map(({ logo, alt, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank" rel="noopener noreferrer"
                            className="font-medium flex items-center gap-2 text-slate-200 hover:text-cyan-400 transition-colors"
                        >
                            <img src={logo} alt={alt} className="h-6 w-6" />
                            {label}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col sm:w-1/3 w-full gap-3 items-center sm:items-start">
                    <h3 className="font-bold text-2xl text-white text-center sm:text-left mb-1">About</h3>
                    {skills.map(({ logo, alt, label }) => (
                        <p key={label} className="font-medium flex items-center gap-2 text-slate-200">
                            <img src={logo} alt={alt} className="h-6 w-6" />
                            {label}
                        </p>
                    ))}
                    <Link
                        to={'/courses'}
                        className="font-medium flex items-center gap-2 text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                        <img src={logoGoogleSites} alt="Logo Google Sites" className="h-6 w-6" />
                        View development courses
                    </Link>
                </div>
            </div>
        </main>
      </Layout>
    )
  }

  export default Home;
