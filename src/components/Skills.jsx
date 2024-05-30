import {
  HTML,
  CSS,
  Github,
  Git,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  nodejs,
  express,
  postgresql,
  prisma,
  mysql,
  nextjs,
  firebase,
  supabase,
  typescript,
  redux,
  docker,
  jest,
  mongodb,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5 ">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className=" grid grid-cols-3 sm:grid-cols-6   gap-2   p-5 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          
          
              <Image img={CPP} ></Image>
              
              <Image img={Python}></Image>
              <Image img={Javascript}></Image>
              <Image img={HTML}></Image>
              <Image img={CSS}></Image>
              <Image img={react}></Image>
              <Image img={Git}></Image>
              <Image img={Github}></Image>
              <Image img={TailwindCSS}></Image>
              <Image img={nodejs}></Image>
              <Image img={express}></Image>
              <Image img={postgresql}></Image>
              <Image img={mysql}></Image>
              <Image img={mongodb}></Image>
              <Image img={prisma}></Image>
              <Image img={nextjs}></Image>
              <Image img={firebase}></Image>
              <Image img={supabase}></Image>
              <Image img={docker}></Image>
              <Image img={typescript}></Image>
              <Image img={redux}></Image>
              <Image img={jest}></Image>
              
           
        </div>
      </section>
    </>
  );
};
export default Skills;
