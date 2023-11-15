import { useContext } from "react";
import { Context } from "../../Context";


const DeepJavascriptCourses = () => {

    const context = useContext(Context);

    return (
        <div className="border-2 p-2 rounded-lg h-full">
        <h2 className="font-bold cursor-pointer" onClick={() => {
            context.openModalDiploma();
            context.setDiplomaName('HTML y CSS a profundidad - Deep HTML and CSS');
            context.setDiplomaImage('html-css-profundidad.png');
        }}>
            Platzi - HTML y CSS a profundidad *
        </h2>
        <h2 className="font-semibold font-">
            - Platzi - Deep HTML and CSS -
        </h2>
        <ul className="mt-2 ml-2">
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Animaciones con CSS - Animations with CSS');
                        context.setDiplomaImage('animaciones-con-css.png');
                    }}>
                    Animaciones con CSS *
                </p>
                <p>- Animations with CSS -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('CSS grid básico - Basic CSS grid');
                        context.setDiplomaImage('css-grid-basico.png');
                    }}>
                    CSS grid básico *</p>
                <p>- Basic CSS grid -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('CSS grid layout');
                        context.setDiplomaImage('css-grid-layout.png');
                    }}>
                    CSS grid layout *</p>
                <p>- CSS grid layout -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Diseño para programadores - Design for developers');
                        context.setDiplomaImage('diseno-para-programadores.png');
                    }}>
                    Diseño para programadores *</p>
                <p>- Design for developers -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Diseño web con CSS, Grid y Flexbox - Web design with CSS, Grid and Flexbox');
                        context.setDiplomaImage('diseno-css-grid-flexbox.png');
                    }}>
                    Diseño web con CSS, Grid y Flexbox *</p>
                <p>- Web design with CSS, Grid and Flexbox -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Frontend developer');
                        context.setDiplomaImage('forntend-developer.png');
                    }}>
                    Frontend developer *</p>
                <p>- Frontend developer -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Frontend developer práctico - Practic frontend developer');
                        context.setDiplomaImage('forntend-developer-practic.png');
                    }}>
                    Frontend developer práctico *</p>
                <p>- Practic frontend developer -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Definitivo de HTML y CSS - Definitive HTML and CSS');
                        context.setDiplomaImage('definitivo-html-css.png');
                    }}>
                    Definitivo de HTML y CSS *</p>
                <p>- Definitive HTML and CSS -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Práctico de HTML y CSS - Practic HTML and CSS');
                        context.setDiplomaImage('practico-html-css.png');
                    }}>
                    Práctico de HTML y CSS *</p>
                <p>- Practic HTML and CSS -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Maquetación mobile first - Mobile first maketation');
                        context.setDiplomaImage('maquetacion-mobile-first.png');
                    }}>
                    Maquetación mobile first *</p>
                <p>- Mobile first maketation -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Maquetación CSS - CSS maketation');
                        context.setDiplomaImage('maquetacion-css-practico.png');
                    }}>
                    Maquetación CSS *</p>
                <p>- CSS maketation -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Preprocesadores CSS - CSS preprocessors');
                        context.setDiplomaImage('preprocesadores-css.png');
                    }}>
                    Preprocesadores CSS *</p>
                <p>- CSS preprocessors -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Fundamentos de SASS - SASS basics');
                        context.setDiplomaImage('fundamentos-sass.png');
                    }}>
                    Fundamentos de SASS *</p>
                <p>- SASS basics -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Sistemas de diseño - Design systems');
                        context.setDiplomaImage('sistemas-diseno.png');
                    }}>
                    Sistemas de diseño *</p>
                <p>- Design systems -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Tailwind CSS');
                        context.setDiplomaImage('tailwind-css.png');
                    }}>
                    Tailwind CSS *</p>
                <p>- Tailwind CSS -</p>
            </li>
            <li>
                <p className="cursor-pointer" onClick={() => {
                        context.openModalDiploma();
                        context.setDiplomaName('Transformaciones y transiciones en CSS - CSS transformations and transitions');
                        context.setDiplomaImage('transformaciones-transiciones-css.png');
                    }}>
                    Transformaciones y transiciones en CSS *</p>
                <p>- CSS transformations and transitions -</p>
            </li>
        </ul>
        <p className="mt-4 font-bold text-xs">* Click to see the diploma</p>
    </div>
);
}

export default DeepJavascriptCourses;