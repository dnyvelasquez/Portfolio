import { useContext } from "react";
import { Context } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid';

const ModalDiploma = () => {

    const context = useContext(Context);    

    return (
        <>
        {context.isModalDiplomaOpen ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t relative">
                    <XMarkIcon 
                        className="h-6 w-6 text-black font-bold cursor-pointer absolute right-4 top-4"
                        onClick={() => context.closeModalDiploma()}
                    />
                    <h3 className="text-xl font-semibold w-11/12 pb-2">
                      {context.diplomaName}
                    </h3>
                    <figure>
                        <img 
                          src={'https://raw.githubusercontent.com/dnyvelasquez/portfolioImages/master/' + context.diplomaImage} 
                          alt="Diploma Image" 
                          className=""
                          />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
}

export default ModalDiploma;