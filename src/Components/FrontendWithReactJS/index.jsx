import { useContext } from "react";
import { Context } from "../../Context";

const FrontendWithReactJS = () => {
  const context = useContext(Context);

  return (
    <div className="border-2 p-2 rounded-lg h-96">
      <h2
        className="font-bold"
        onClick={() => {
          // context.openModalDiploma();
          // context.setDiplomaName("Frontend con React.JS - Frontend with React.JS");
          // context.setDiplomaImage("frontend-reactjs.png");
        }}
      >
        Platzi - Frontend con React.JS
      </h2>
      <h2 className="font-semibold">- Platzi - Frontend with React.JS -</h2>
      <div className="h-3/4 overflow-y-auto">
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
            <p>- React.JS -</p>
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
            <p>- React.JS with Vite.JS and TailwindCSS -</p>
          </li>
        </ul>
      </div>
      <p className="mt-4 font-bold text-xs">* Click to see the diploma</p>
    </div>
  );
};

export default FrontendWithReactJS;
