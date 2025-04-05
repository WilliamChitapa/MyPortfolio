import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-black text-white flex flex-col items-center
         justify-center h-screen px-6 md:px-12 lg:px-24 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I'm William 👋
            </h1>
            <p className="text-lg mt-4 max-w-2xl leading-relaxed">
                <span className="font-bold">Desenvolvedor Front-End  </span>
                baseado em Interface, Angola AO. Apaixonado por desempenho,
                experiência do usuário e por fornecer a melhor qualidade de
                software.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a href="https://www.linkedin.com/in/william-chitapa-6038a5353/"
                    target="_blank" rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-2 rounded-full flex 
                    items-center gap-2 hover:bg-gray-600">
                    <FaLinkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="https://github.com/WilliamChitapa" target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-2 rounded-full
                     flex items-center gap-2 hover:bg-gray-600">
                    <FaGithub className="w-5 h-5" /> GitHub
                </a>
                <button className="bg-green-500 px-4 py-2 rounded-full flex 
                items-center gap-2 hover:bg-green-600">
                    <a
                        href="https://wa.me/244944030498"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Talk to me!
                    </a>
                </button>
            </div>
        </section>
    );
};

export default Hero;
