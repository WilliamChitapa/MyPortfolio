import React from 'react';
import vitalcare from '../img/dotorsite.png';

const Projects = () => {
    return (
        <section id="projects" className="bg-black text-white py-16 px-4 md:px-44">
            <h2 className="text-4xl font-bold mb-4 text-center">Side Projects</h2>
            <p className="text-lg mb-8 text-center">
                Aqui estão alguns dos projetos em que tenho trabalhado este ano.
            </p>

            <div className="flex justify-center items-center">
                <div className="bg-black rounded-lg w-full
                flex justify-center items-center max-w-[800px] h-auto">
                    <img
                        src={vitalcare}
                        className="rounded-lg w-full h-auto object-cover 
                        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                        alt="Projeto VitalCare"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
