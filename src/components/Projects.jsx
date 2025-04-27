import ProjectProp from "./ProjectProp";
import {
  
  vidigo,
  instaShow,
  netflixgpt,
  fitlifehub,
  snakegame,
  fluxmeet,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiChakraui,
  
} from "react-icons/si";

import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";







const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
           <ProjectProp
            title="Fluxmeet"
            para="A Zoom alternative, with authentication and authorization using Clerk for secure user access.
                • Meeting controls, screen sharing, participant management, and emoji reactions.
                • Meeting scheduling, listing, and viewing of future and past meetings with access to recorded sessions.
                • Responsive and efficient UI, ensuring optimal user experience and real-time secure interactions across devices."
            img={fluxmeet}
            link="https://flux-meet.vercel.app/"
            github_link="https://github.com/ANI2707/fluxMeet/"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            redux={
              <Tooltip title="Redux" arrow>
                <IconButton>
                  <TbBrandRedux className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <ProjectProp
            title="vidigo"
            para="• Vidigo is a cutting-edge YouTube clone crafted with React.js and Tailwind CSS, offering a sleek and intuitive
            interface for users to explore and engage with video content • With features like infinite scrolling, live chat powered by API pooling, and category-wise video filtering, Its advanced
            search functionality, enhanced by debouncing"
            img={vidigo}
            link="https://vidigo.vercel.app/"
            github_link="https://github.com/ANI2707/vidig"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            redux={
              <Tooltip title="Redux" arrow>
                <IconButton>
                  <TbBrandRedux className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <ProjectProp
            title="InstaShow"
            para="Developed a instagram  web application using React.js, Chakra
            UI, and Firebase
            • Implemented  authentication and
            authorization
            • Utilized Zustand for state management."
            img={instaShow}
            link="https://socialhub1.vercel.app/"
            github_link="https://github.com/ANI2707/Instagram-Clone"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            chakraui={
              <Tooltip title="Chakra UI" arrow>
                <IconButton>
                  <SiChakraui className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            firebase={
              <Tooltip title="Firebase" arrow>
                <IconButton>
                  <IoLogoFirebase className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <ProjectProp
            title="NetflixGPT"
            para="NetFlix GPT is a React web application inspired by Netflix, integrating AI-generated movie suggestions using
            OpenAI’s GPT model.
            • It features user authentication with Firebase, dynamic movie data fetching from the TMDB API, and a responsive
            UI built with Tailwind CSS
            • Users can sign up, log in, browse a collection of now playing movies, watch trailers, and receive movie recommendations."
            img={netflixgpt}
            link="https://netflix-gpt-two-wheat.vercel.app/"
            github_link="https://github.com/ANI2707/netflixGPT"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            redux={
              <Tooltip title="Redux" arrow>
                <IconButton>
                  <TbBrandRedux className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            firebase={
              <Tooltip title="Firebase" arrow>
                <IconButton>
                  <IoLogoFirebase className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            openai={
              <Tooltip title="Open AI" arrow>
                <IconButton>
                  <RiOpenaiFill className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <ProjectProp
            title="Fitlife Hub"
            para="FitLifeHub is a comprehensive fitness website designed and developed using React.js, Material UI,Tailwind CSS and
            various React packages, ensuring a dynamic and user-friendly experience.The integration of Rapid API allows seamless retrieval and display of preferred exercises"
            img={fitlifehub}
            link="https://fitlifehub12.netlify.app/"
            github_link="https://github.com/ANI2707/FitnessApp"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            
          />
          <ProjectProp
            title="Snake Game"
            para="Created old nokia Mobile phone Snake game  to remember childhood memories"
            img={snakegame}
            link="https://snake-game-rosy-chi.vercel.app/"
            github_link="https://github.com/ANI2707/SnakeGame"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
      <div className="flex justify-center">
      <button className="py-3 px-4  mt-10 mr-3 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit focus:ring-4  dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">
                <a href="https://github.com/ANI2707" target="_blank">For more projects...</a>
              </button>
      </div>
      
    </section>
  );
};
export default Projects;
