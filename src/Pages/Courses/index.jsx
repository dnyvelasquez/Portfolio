import { useContext } from "react";
import { Context } from "../../Context";
import Layout from "../../Components/Layout";
import ModalDiploma from "../../Components/ModalDiploma";
import DeepHtmlCssCourses from "../../Components/DeepHtmlCssCourses"
import DeepJavascriptCourses from "../../Components/DeepJavascriptCourses"

const Courses = () => {

    const context = useContext(Context);

    return (
        <Layout>
            <main className="bg-slate-400 min-h-screen w-full flex flex-col items-center">
                <h1 className="mt-4 font-bold text-lg">COURSES</h1>
                <div className="flex flex-wrap justify-center m-4 gap-4">
                    <DeepHtmlCssCourses />
                    <DeepJavascriptCourses />
                </div>
                {context.isModalDiplomaOpen ? <ModalDiploma /> : false}
            </main>
        </Layout>
    );

}

export default Courses;