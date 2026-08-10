import React from 'react';
import profile from '../img/profile-photo.png';

const About = () => {
    return (
        <section id="about" className=" text-zinc-300 py-8 sm:py-12
         lg:py-16">
            <h2 className="text-2xl sm: text-center sm:text-3xl lg:text-4xl 
            font-bold mb-6 
            sm:mb-8 ml-4 sm:ml-6 lg:ml-10">
                About me
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6 
            sm:gap-8 ml-4 sm:ml-6 lg:ml-10 mr-4 sm:mr-6 lg:mr-10">


                <img
                    src={profile}
                    alt="William"
                    className="w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96
                    rounded-lg object-cover mb-6 md:mb-0 md:mr-2 lg:mr-8"
                />

                <div className="space-y-4 sm:space-y-5">
                    <p className="text-sm sm:text-base lg:text-lg">
                        Olá, sou Desenvolvedor Full Stack  especializado em criar
                        aplicações web completas utilizando HTML, CSS3, JavaScript,
                        ReactJS, Node.js e PostgreSQL. Tenho experiência no desenvolvimento
                        de interfaces modernas e back-ends robustos, sempre focando em
                        desempenho e usabilidade.
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg">
                        Utilizo Git e GitHub para gerenciamento de versões e colaboração em
                        equipe, mantendo sempre um código limpo, organizado e bem
                        documentado. Estou constantemente em busca de novos desafios para
                        evoluir como desenvolvedor e criar soluções inovadoras. 🚀
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg">
                        Um dos meus principais pontos fortes é desenvolver aplicações
                        rápidas, escaláveis e de alta qualidade, unindo front-end e
                        back-end para proporcionar a melhor experiência possível aos
                        usuários, seguindo sempre boas práticas de desenvolvimento.
                    </p>

                    <button className="bg-green-500 px-4 py-2 rounded-full
                        hover:bg-green-600 text-sm sm:text-base transition-colors
                        duration-300">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Talk to me!
                        </a>
                    </button>
                </div>


            </div>
        </section>
    );
};

export default About;
