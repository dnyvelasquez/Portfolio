import { useContext } from "react";
import { Context } from "../../Context";
import Layout from "../../Components/Layout";
import ModalDiploma from "../../Components/ModalDiploma";
import DeepHtmlCssCourses from "../../Components/DeepHtmlCssCourses"

const Courses = () => {

    const context = useContext(Context);

    return (
        <Layout>
            <main className="bg-slate-400 min-h-screen w-full flex flex-col items-center">
                <h1 className="mt-4 font-bold text-lg">COURSES</h1>
                <div className="flex my-4">
                    <DeepHtmlCssCourses />
                </div>
                {context.isModalDiplomaOpen ? <ModalDiploma /> : false}
            </main>
        </Layout>
    );

}

export default Courses;