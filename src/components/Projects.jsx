import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import hairgo from "../img/hairgo.png";
import tfia from "../img/tfia.png";
import tfwork from "../img/tfwork.png";
import angojobs from "../img/angojobs.png";


const projects = [
  {
    image: hairgo,
    title: "HairGo",
    link: "#",
  },
  {
    image: tfia,
    title: "TF IA",
    link: "#",
  },
  {
    image: tfwork,
    title: "TF Work",
    link: "#",
  },
  {
    image: angojobs,
    title: "AngoJobs",
    link: "#",
  },
];


const Projects = () => {

  const [selectedImage, setSelectedImage] = useState(null);


  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >

      <h1 className="text-4xl font-bold mb-4 text-center text-white">
        My recently Project
      </h1>


      <p className="text-center text-lg mb-10 text-white">
        Aqui estão alguns dos projetos em que tenho trabalhado este ano.
      </p>


      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full max-w-[900px]"
      >

        {projects.map((project, index) => (

          <SwiperSlide key={index}>

            <div className="flex flex-col items-center gap-6">


              <div
                className="bg-black rounded-lg
                w-full max-w-[800px]
                flex justify-center items-center cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    rounded-lg
                    w-full
                    h-auto
                    object-cover
                    max-w-xs
                    sm:max-w-sm
                    md:max-w-md
                    lg:max-w-lg
                    xl:max-w-xl
                  "
                />

              </div>


              <a
                href={project.link}
                
                rel="noopener noreferrer"
                className="
                underline text-xl
                text-white
                hover:text-green-500
                transition duration-300"
              >
                View Project 📌
              </a>


            </div>

          </SwiperSlide>

        ))}


      </Swiper>


      {/* Modal da imagem */}
      {selectedImage && (

        <div
          className="
          fixed inset-0
          bg-black/90
          flex justify-center items-center
          z-50
          p-5
          cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Preview Project"
            className="
            max-w-full
            max-h-full
            rounded-lg
            object-contain"
          />

        </div>

      )}


    </section>
  );
};


export default Projects;