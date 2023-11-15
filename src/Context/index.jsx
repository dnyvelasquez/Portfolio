import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {

    const [isModalDiplomaOpen, setModalDiplomaOpen] = useState(false);
    const closeModalDiploma = () => {setModalDiplomaOpen(false)};
    const openModalDiploma = () => {setModalDiplomaOpen(true)};

    const [diplomaName, setDiplomaName] = useState('')
    const [diplomaImage, setDiplomaImage] = useState({})

    return (
        <Context.Provider value={{
            isModalDiplomaOpen, 
            setModalDiplomaOpen,
            closeModalDiploma,
            openModalDiploma,
            diplomaName,
            setDiplomaName,
            diplomaImage, 
            setDiplomaImage,
        }}>
            {children};
        </Context.Provider>    

    );

}