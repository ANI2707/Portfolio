/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";

import { personal } from "../constants/Constant";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem]  max-sm:p-2 "
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
          <div className="ABOUT p-7">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
              Aniket Bhosale
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
              Full Stack Developer | Software Developer
            </p>
            <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/ANI2707"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
                target="_blank"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-bhosale-217a7a223/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
                target="_blank"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/aniket.bhosale_"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
                target="_blank"
              >
                <SiInstagram />
              </a>
              <a
                href="https://twitter.com/AniketB82544141"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
                target="_blank"
              >
                <SiTwitter />
              </a>
              <a
                href="bhosaleaniket826@gmail.com"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
                target="_blank"
              >
                <SiGmail />
              </a>
            </div>
            <div className="flex gap-5 max-sm:justify-center">
              <button className="py-3 px-4  mt-10 mr-3 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit focus:ring-4  dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">
                <a href="https://drive.google.com/file/d/1Mx6lPk2oQSlwi64xhZDOoWbX_Ic1R5rO/view" target="_blank">Resume</a>
              </button>
              {/* <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600  font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded ">
                <a
                  href=""
                  className="flex gap-2 items-center justify-center"
                >
                  <SiGithub />
                  Star
                </a>
              </button> */}
            </div>
          </div>
          <Form/>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center">
            <img
              src={personal}
              alt="Aniket Bhosale"
              className="h-[200px] max-sm:h-[150px] border-[#00040fab] dark:border-slate-300 border-4 rounded-full mt-12"
            />
          </div>
        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with 💙 by Aniket Bhosale
        </p>
        
      </section>
    </>
  );
};
export default Contact;
