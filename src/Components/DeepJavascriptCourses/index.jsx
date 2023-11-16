import { useContext } from "react";
import { Context } from "../../Context";

const DeepHtmlCssCourses = () => {
  const context = useContext(Context);

  return (
    <div className="course-card border-2 p-2 rounded-lg w-96">
      <h2 className="font-extrabold text-center">PLATZI</h2>
      <h3
        className="font-bold text-center cursor-pointer"
        onClick={() => {
          context.openModalDiploma();
          context.setDiplomaName("Javascript a profundidad - Deep Javascript");
          context.setDiplomaImage("javascript-profundidad.png");
        }}
      >
        Javascript a profundidad *
      </h3>
      <h3 className="font-semibold text-center">Deep Javascript</h3>
      <div className="courses-container overflow-y-auto">
        <ul className="mt-2 ml-2">
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Animaciones con CSS práctico - Practic animations with CSS"
                );
                context.setDiplomaImage("animaciones-css-practico.png");
              }}
            >
              Animaciones con CSS práctico *
            </p>
            <p>- Practic animations with CSS -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "API REST con Javascript - API REST with Javascript"
                );
                context.setDiplomaImage("javascript-api-rest.png");
              }}
            >
              API REST con Javascript *
            </p>
            <p>- API REST with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "API REST con Javascript práctico - Practic API REST with Javascript"
                );
                context.setDiplomaImage("javascript-api-rest-practico.png");
              }}
            >
              API REST con Javascript práctico *
            </p>
            <p>- Practic API REST with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "API REST con Javascript profesional - Professional API REST with Javascript"
                );
                context.setDiplomaImage("javascript-api-rest-profesional.png");
              }}
            >
              API REST con Javascript profesional *
            </p>
            <p>- Professional API REST with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Manipulación de arrays con Javascript - Arrays handling with Javascript"
                );
                context.setDiplomaImage("arrays-javascript.png");
              }}
            >
              Manipulación de arrays con Javascript *
            </p>
            <p>- Array handling with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Asincronismo con Javascript - Asyncronism with Javascript"
                );
                context.setDiplomaImage("asincronismo-javascript.png");
              }}
            >
              Asincronismo con Javascript *
            </p>
            <p>- Asyncronism with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Básico de Javascript - Basics Javascript"
                );
                context.setDiplomaImage("basico-javascript.png");
              }}
            >
              Básico de Javascript *
            </p>
            <p>- Basics Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Complejidad algorítmica con Javascript -  Algorithmic complexity with Javascript"
                );
                context.setDiplomaImage("complejidad-javascript.png");
              }}
            >
              Complejidad algorítmica con Javascript *
            </p>
            <p>- Algorithmic complexity with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Debugging con Chrome Devtools -  Debugging with Chrome Devtools"
                );
                context.setDiplomaImage("debugging-devtools.png");
              }}
            >
              Debugging con Chrome Devtools *
            </p>
            <p>- Debugging with Chrome Devtools -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName("EcmaScript");
                context.setDiplomaImage("ecmascript.png");
              }}
            >
              EcmaScript *
            </p>
            <p>- EcmaScript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Estructuras de datos con Javascript - Data structure with Javascript"
                );
                context.setDiplomaImage("estructuras-datos-javascript.png");
              }}
            >
              Estructuras de datos con Javascript *
            </p>
            <p>- Data structure with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Clean code en Javascript - Javascript clean code"
                );
                context.setDiplomaImage("clean-code-javascript.png");
              }}
            >
              Clean code en Javascript *
            </p>
            <p>- Javascript clean code -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Closures y scope en Javascript - Javascript closures and scope"
                );
                context.setDiplomaImage("closures-scope-javascript.png");
              }}
            >
              Closures y scope en Javascript *
            </p>
            <p>- Javascript closures and scope -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Javascript Engine (V8) y el Navigator - Javascript Engine (V8) and The Navigator"
                );
                context.setDiplomaImage("v8-javascript.png");
              }}
            >
              Javascript Engine (V8) y el Navigator *
            </p>
            <p>- Javascript Engine (V8) and The Navigator -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "POO con Javascript básico - Basics OOP with Javascript"
                );
                context.setDiplomaImage("poo-javascript-basico.png");
              }}
            >
              POO con Javascript básico *
            </p>
            <p>- Basics OOP with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "POO con Javascript intermedio - Intermediate OOP with Javascript"
                );
                context.setDiplomaImage("poo-javascript-intermedio.png");
              }}
            >
              POO con Javascript intermedio *
            </p>
            <p>- Intermediate OOP with Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Javascript práctico - Practic Javascript"
                );
                context.setDiplomaImage("javascript-practico.png");
              }}
            >
              Javascript práctico *
            </p>
            <p>- Practic Javascript -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Javascript: Matemáticas y estadística - Javascript: Math and estadistics"
                );
                context.setDiplomaImage(
                  "matematicas-estadistica-javascript.png"
                );
              }}
            >
              Javascript: Matemáticas y estadística *
            </p>
            <p>- Javascript: Math and estadistics -</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Programación orientada a objetos - Oriented Objects Programation"
                );
                context.setDiplomaImage("programacion-orientada-objetos.png");
              }}
            >
              Programación orientada a objetos *
            </p>
            <p>- Oriented Objects Programation -</p>
          </li>
        </ul>
      </div>
      <p className="mt-4 font-bold text-xs">* Click to see the diploma</p>
    </div>
  );
};

export default DeepHtmlCssCourses;
