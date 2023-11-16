import { useContext } from "react";
import { Context } from "../../Context";
import Layout from "../../Components/Layout";
import ModalDiploma from "../../Components/ModalDiploma";
import DeepHtmlCssCourses from "../../Components/DeepHtmlCssCourses";
import DeepJavascriptCourses from "../../Components/DeepJavascriptCourses";
import LibrariesNpm from "../../Components/LibrariesNpm";
import FrontendWithReactJS from "../../Components/FrontendWithReactJS";

const Courses = () => {

    const context = useContext(Context);

    return (
        <Layout>
            <main className="bg-slate-400 h-full w-full flex flex-col items-center">
                <h1 className="mt-4 font-bold text-lg">WEB DEVELOPMENT COURSES</h1>
                <div className="flex flex-wrap justify-center m-4 gap-8">
                    <DeepHtmlCssCourses />
                    <DeepJavascriptCourses />
                    <LibrariesNpm />
                    <FrontendWithReactJS />
                </div>
                {context.isModalDiplomaOpen ? <ModalDiploma /> : false}
            </main>
        </Layout>
    );

}

export default Courses;