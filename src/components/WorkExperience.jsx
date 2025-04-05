import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGit } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const WorkExperience = () => {
    return (
        <section id="work" className="bg-black mt-[-90px]   text-white pt-4 pb-10 px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
            <div className="relative border-l-4 border-green-500 pl-6 sm:pl-6 md:pl-2 lg:pl-8 xl:pl-8">
                <div className="mb-10">
                    <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold">May 2021 - Present</h3>
                    <h4 className="text-lg text-green-400">Front-End Developer | Tools</h4>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Utilizo GitHub para gerenciamento de versões e colaboração em equipe, mantendo sempre um código limpo e bem documentado.</li>
                        <li>Estou constantemente em busca de novas oportunidades para crescer como programador e contribuir com soluções inovadoras.</li>
                        <li>Desenvolvimento de interfaces dinâmicas com <span className='font-bold'> ReactJS</span></li>
                        <li>Criação de páginas web responsivas e adaptadas para diferentes dispositivos</li>
                        <li>Implementação de boas práticas de Jr e acessibilidade</li>
                        <li>Gerenciamento de projetos no GitHub 📌.</li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        <span className="bg-gray-800 p-2 rounded-full">
                            <FaGit className="w-6 h-6 text-white" />
                        </span>
                        <span className="bg-gray-800 p-2 rounded-full">
                            <FaGithub className="w-6 h-6 text-white" />
                        </span>
                        <span className="bg-gray-800 p-2 rounded-full">
                            <SiTailwindcss className="w-6 h-6 text-blue-500" />
                        </span>
                        <span className="bg-gray-800 p-2 rounded-full">
                            <FaReact className="w-6 h-6 text-cyan-500" />
                        </span>
                    </div>
                </div>
                <div>
                    <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold">August 2024 - February 2025</h3>
                    <h4 className="text-lg text-green-400">Front-end Developer | Skills</h4>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Em 2025, já com uma boa Experiência em TailwindCSS e experiência em Front-end com HTML, CSS, JavaScript e React, <br /> consegui uma oportunidade incrível</li>
                        <li>Repliquei o <span className='font-bold'> site da Workana,</span> uma plataforma que conecta Freelancers a clientes.</li>
                        <li>Meu papel é focado na interface do usuário, e eu trabalhei na reformulação de <span className='font-bold'> várias seções </span> do site, <br /> como o perfil de freelancers e a área de projetos 🚀.</li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        <span className="bg-gray-800 p-2 rounded-full">
                            <FaHtml5 className="w-6 h-6 text-white" />
                        </span>
                        <span className="bg-gray-800 p-2 rounded-full">
                            <FaCss3Alt className="w-6 h-6 text-blue-500" />
                        </span>
                        <span className="bg-gray-800 p-2 rounded-full">
                            <FaJs className="w-6 h-6 text-yellow-200" />
                        </span>
                        <span className="bg-gray-800 p-2 rounded-full">
                            <FaReact className="w-6 h-6 text-cyan-500" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;