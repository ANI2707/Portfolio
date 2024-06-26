/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const ProjectProp = (props) => {
  return (
    <>
      <div className=" border-gray-500 shadow-xl  bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl min-h-[50vh] p-7  max-sm:p-3  hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]">
        <div className="HEADER">
          <div className="HEADING flex flex-col sm:flex-row justify-center items-center gap-6 max-sm:gap-0">
            <div className="p-3 ">
              <img
                src={props.img}
                alt=""
                className="w-52 h-36 rounded-md  border border-[#00040f]"
              />
            </div>
            <div className="p-3">
              <h1 className=" font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl mb-2 ">
                {props.title}
              </h1>
              

              <div className="flex gap-1 p-1 -translate-x-2">
                {props.html5}
                {props.css3}
                {props.javascript}
                {props.tailwindcss}
                {props.react}
                {props.vite}
                {props.redux}
                {props.firebase}
                {props.chakraui}
                {props.openai}
                
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-500 mt-5 text-lg px-5">{props.para}</p>

        <div className="flex gap-2 text-[#00040f] dark:text-slate-200 p-2 pl-5 mt-5 text-3xl">
          <a href={props.github_link}>
            <SiGithub />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer">
            <SlLink />
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectProp;
