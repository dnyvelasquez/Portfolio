import { useContext } from "react";
import { Context } from "../../Context";

const FrontendWithReactJS = () => {
  const context = useContext(Context);

  return (
    <div className="course-card border-2 p-2 rounded-lg w-96">
      <h2 className="font-extrabold text-center">PLATZI</h2>
      <h3
        className="font-bold text-center"
        onClick={() => {
          // context.openModalDiploma();
          // context.setDiplomaName("Frontend con React.JS - Frontend with React.JS");
          // context.setDiplomaImage("frontend-reactjs.png");
        }}
      >
        Frontend con React.JS
      </h3>
      <h3 className="font-semibold text-center">Frontend with React.JS</h3>
      <div className="courses-container overflow-y-auto">
        <ul className="mt-2 ml-2">
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "React.JS"
                );
                context.setDiplomaImage("reactjs.png");
              }}
            >
              React.JS *
            </p>
            <p className="pl-2 font-semibold text-sm">React.JS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "React.JS con Vite.JS y TailwindCSS - React.JS with Vite.JS and TailwindCSS"
                );
                context.setDiplomaImage("reactjs-vitejs-tailwindcss.png");
              }}
            >
              React.JS con Vite.JS y TailwindCSS *
            </p>
            <p className="pl-2 font-semibold text-sm">React.JS with Vite.JS and TailwindCSS</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "Laboratorio React.JS - React.JS Lab"
                );
                context.setDiplomaImage("laboratorio-react.png");
              }}
            >
              Laboratorio React.JS *
            </p>
            <p className="pl-2 font-semibold text-sm">React.JS Lab</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "React.JS: Patrones de render y composición - Render patterns and composition"
                );
                context.setDiplomaImage("reactjs-patrones-composicion.png");
              }}
            >
              React.JS: Patrones de render y composición *
            </p>
            <p className="pl-2 font-semibold text-sm">React.JS: Render patterns and composition</p>
          </li>
          <li>
            <p
              className="cursor-pointer"
              onClick={() => {
                context.openModalDiploma();
                context.setDiplomaName(
                  "React.JS: Manejo profesional del estado - Professional state handling"
                );
                context.setDiplomaImage("reactjs-manejo-estado.png");
              }}
            >
              React.JS: Manejo profesional del estado *
            </p>
            <p className="pl-2 font-semibold text-sm">React.JS: Professional state handling</p>
          </li>
        </ul>
      </div>
      <p className="mt-4 font-bold text-xs">* Click to see the diploma</p>
    </div>
  );
};

export default FrontendWithReactJS;
