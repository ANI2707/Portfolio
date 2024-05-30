"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  GSSOC,
  elite,
  gfg,
  social,
  ciphers,
  frontendworld,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={frontendworld}
              title="Frontend World"
              subtitle="Full stack developer"
              date="Jan 2024 - Mar 2024"
              para={` Mostly worked on frontend using Next JS , TypeScript ,Tailwind Css along with this also worked on Prisma ORM for managing API's with Postgresql.
              `}
            />
            <Exp_prop
              img={elite}
              title="Elite Software"
              subtitle="Python-Django Intern"
              date="Nav 2022 - Feb 2023"
              para={` I played a key role in coding, debugging, gaining hands-on experience in
              Django development, followed software development life cycle (SDLC).
              `}
            />
            <Exp_prop
              img={gfg}
              title="Geeksforgeeks"
              subtitle="Technical Content Writer"
              date="Freelance"
              para=" Authored and published 10+ engaging and informative articles on data structures
              and software development topics on the Geeks for Geeks platform. "
            />
            <Exp_prop
              img={social}
              title="Social Summer Of Code 2023"
              subtitle="Open Source Contributer"
              date="2023"
              para="Conducted extensive code design, development, testing, deployment, and wrote clean, maintainable, and efficient code Achieved DEV-RANK Of 32"
            />
              <Exp_prop
                img={GSSOC}
                title="GSSoC'24 Contributor"
                subtitle="Contributor"
                date="May 2024 - present"
                para=" Contributed in open source repositories like GameSphere, OpenTech, Moksh, Community Website etc. "
              />
            
            <Exp_prop
              img={ciphers}
              title="Ciphers Community"
              subtitle="Core Team Member"
              date="April 2023 - present"
              para="- Unlocking Potential, One Cipher at a Time: Took session on importance of Open source contributions for Ciphers community members . shown how to make your first contribution.

              "
            />
            
            
            
          </div>
        </div>
      </section>
      
    </>
  );
};
export default Experience;
