import { useContext } from "react";
import { Context } from "../../Context";

const LibrariesNpm = () => {
  const context = useContext(Context);

  return (
    <div className="course-card border-2 p-2 rounded-lg">
      <h2 className="font-extrabold text-center">PLATZI</h2>
      <h3
        className="font-bold text-center"
        onClick={() => {
          // context.openModalDiploma();
          // context.setDiplomaName("Librerías y dependencias de Javascript con NPM - Javascript libraries and dependencies with NPM");
          // context.setDiplomaImage("librerias-dependencias-javascrip-npm.png");
        }}
      >
        Librerías y dependencias de Javascript con NPM
      </h3>
      <h3 className="font-semibold text-center">Javascript libraries and dependencies with NPM</h3>
      <div className="courses-container--2 overflow-y-auto">
        <ul className="mt-2 ml-2">
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Frameworks y arquitecturas frontend - Frontend frameworks and architectures"
                );
                context.setDiplomaImage("frameworks-arquitecturas-frontend.png");
              }}
            >
              Frameworks y arquitecturas frontend *
            </p>
            <p className="pl-2 font-semibold text-sm">Frontend frameworks and architectures</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Manipulación del DOM - DOM handling"
                );
                context.setDiplomaImage("manipulacion-dom.png");
              }}
            >
              Manipulación del DOM *
            </p>
            <p className="pl-2 font-semibold text-sm">DOM handling</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Introducción empaquetadores web - Web packers introduction"
                );
                context.setDiplomaImage("introduccion-empaquetadores-web.png");
              }}
            >
              Introducción empaquetadores web *
            </p>
            <p className="pl-2 font-semibold text-sm">Web packers introduction</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Frameworks y librerías de Javascript - Javascript frameworks and libraries"
                );
                context.setDiplomaImage("frameworks-librerías-javascript.png");
              }}
            >
              Frameworks y librerías de Javascript *
            </p>
            <p className="pl-2 font-semibold text-sm">Javascript frameworks and libraries</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "NPM"
                );
                context.setDiplomaImage("npm.png");
              }}
            >
              NPM *
            </p>
            <p className="pl-2 font-semibold text-sm">NPM</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Programación reactiva con RXJS - Reactive programming with RXJS"
                );
                context.setDiplomaImage("programacion-reactiva-rxjs.png");
              }}
            >
              Programación reactiva con RXJS *
            </p>
            <p className="pl-2 font-semibold text-sm">Reactive programming with RXJS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "SolidJS"
                );
                context.setDiplomaImage("solidjs.png");
              }}
            >
              SolidJS *
            </p>
            <p className="pl-2 font-semibold text-sm">SolidJS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "SPA con Vanilla Javascript - SPA with Vanilla Javascript"
                );
                context.setDiplomaImage("spa-vanilla-javascript.png");
              }}
            >
              SPA con Vanilla Javascript *
            </p>
            <p className="pl-2 font-semibold text-sm">SPA with Vanilla Javascript</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Svelte"
                );
                context.setDiplomaImage("svelte.png");
              }}
            >
              Svelte *
            </p>
            <p className="pl-2 font-semibold text-sm">Svelte</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Vite.JS"
                );
                context.setDiplomaImage("vitejs.png");
              }}
            >
              Vite.JS *
            </p>
            <p className="pl-2 font-semibold text-sm">Vite.JS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Webpack"
                );
                context.setDiplomaImage("webpack.png");
              }}
            >
              Webpack *
            </p>
            <p className="pl-2 font-semibold text-sm">Webpack</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Optimización web - Web performance"
                );
                context.setDiplomaImage("optimizacion-web.png");
              }}
            >
              Optimización web *
            </p>
            <p className="pl-2 font-semibold text-sm">Web performance</p>
          </li>
        </ul>
      </div>
      <p className="mt-4 font-bold text-xs">* Click to see the diploma</p>
    </div>
  );
};

export default LibrariesNpm;
