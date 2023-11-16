import { useContext } from "react";
import { Context } from "../../Context";

const DeepJavascriptCourses = () => {
  const context = useContext(Context);

  return (
    <div className="course-card border-2 p-2 rounded-lg w-96">
      <h2 className="font-extrabold text-center">PLATZI</h2>
      <h3
        className="font-bold text-center cursor-pointer"
        onClick={() => {
          context.openModalDiploma();
          context.setDiplomaName(
            "HTML y CSS a profundidad - Deep HTML and CSS"
          );
          context.setDiplomaImage("html-css-profundidad.png");
        }}
      >
        HTML y CSS a profundidad *
      </h3>
      <h3 className="font-semibold text-center">Deep HTML and CSS</h3>
      <div className="courses-container overflow-y-auto">
        <ul className="mt-2 ml-2">
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Animaciones con CSS - Animations with CSS"
                );
                context.setDiplomaImage("animaciones-con-css.png");
              }}
            >
              Animaciones con CSS *
            </p>
            <p className="pl-2 font-semibold text-sm">Animations with CSS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName("CSS grid básico - Basic CSS grid");
                context.setDiplomaImage("css-grid-basico.png");
              }}
            >
              CSS grid básico *
            </p>
            <p className="pl-2 font-semibold text-sm">Basic CSS grid</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName("CSS grid layout");
                context.setDiplomaImage("css-grid-layout.png");
              }}
            >
              CSS grid layout *
            </p>
            <p className="pl-2 font-semibold text-sm">CSS grid layout</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Diseño para programadores - Design for developers"
                );
                context.setDiplomaImage("diseno-para-programadores.png");
              }}
            >
              Diseño para programadores *
            </p>
            <p className="pl-2 font-semibold text-sm">Design for developers</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Diseño web con CSS, Grid y Flexbox - Web design with CSS, Grid and Flexbox"
                );
                context.setDiplomaImage("diseno-css-grid-flexbox.png");
              }}
            >
              Diseño web con CSS, Grid y Flexbox *
            </p>
            <p className="pl-2 font-semibold text-sm">Web design with CSS, Grid and Flexbox</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName("Frontend developer");
                context.setDiplomaImage("forntend-developer.png");
              }}
            >
              Frontend developer *
            </p>
            <p className="pl-2 font-semibold text-sm">Frontend developer</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Frontend developer práctico - Practic frontend developer"
                );
                context.setDiplomaImage("forntend-developer-practic.png");
              }}
            >
              Frontend developer práctico *
            </p>
            <p className="pl-2 font-semibold text-sm">Practic frontend developer</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Definitivo de HTML y CSS - Definitive HTML and CSS"
                );
                context.setDiplomaImage("definitivo-html-css.png");
              }}
            >
              Definitivo de HTML y CSS *
            </p>
            <p className="pl-2 font-semibold text-sm">Definitive HTML and CSS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Práctico de HTML y CSS - Practic HTML and CSS"
                );
                context.setDiplomaImage("practico-html-css.png");
              }}
            >
              Práctico de HTML y CSS *
            </p>
            <p className="pl-2 font-semibold text-sm">Practic HTML and CSS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Maquetación mobile first - Mobile first maketation"
                );
                context.setDiplomaImage("maquetacion-mobile-first.png");
              }}
            >
              Maquetación mobile first *
            </p>
            <p className="pl-2 font-semibold text-sm">Mobile first maketation</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName("Maquetación CSS - CSS maketation");
                context.setDiplomaImage("maquetacion-css-practico.png");
              }}
            >
              Maquetación CSS *
            </p>
            <p className="pl-2 font-semibold text-sm">CSS maketation</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Preprocesadores CSS - CSS preprocessors"
                );
                context.setDiplomaImage("preprocesadores-css.png");
              }}
            >
              Preprocesadores CSS *
            </p>
            <p className="pl-2 font-semibold text-sm">CSS preprocessors</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName("Fundamentos de SASS - SASS basics");
                context.setDiplomaImage("fundamentos-sass.png");
              }}
            >
              Fundamentos de SASS *
            </p>
            <p className="pl-2 font-semibold text-sm">SASS basics</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName("Sistemas de diseño - Design systems");
                context.setDiplomaImage("sistemas-diseno.png");
              }}
            >
              Sistemas de diseño *
            </p>
            <p className="pl-2 font-semibold text-sm">Design systems</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName("Tailwind CSS");
                context.setDiplomaImage("tailwind-css.png");
              }}
            >
              Tailwind CSS *
            </p>
            <p className="pl-2 font-semibold text-sm">Tailwind CSS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Transformaciones y transiciones en CSS - CSS transformations and transitions"
                );
                context.setDiplomaImage(
                  "transformaciones-transiciones-css.png"
                );
              }}
            >
              Transformaciones y transiciones en CSS *
            </p>
            <p className="pl-2 font-semibold text-sm">CSS transformations and transitions</p>
          </li>
        </ul>
      </div>
      <p className="mt-4 font-bold text-xs">* Click to see the diploma</p>
    </div>
  );
};

export default DeepJavascriptCourses;
