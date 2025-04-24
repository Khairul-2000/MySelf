import Image from "next/image";
import myPhoto from "../images/about.jpg";
import Transition from "../_compontents/Transition";

const About = () => {
  return (
    <div>
      <Transition>
        <h1 className="mb-[35px] text-5xl">
          About Me <span className="animate-pulse">👋</span>
        </h1>
        <div className="z-10 flex flex-col items-center gap-12 sm:mx-[35px] sm:flex-row">
          <Image
            src={myPhoto}
            style={{ objectFit: "contain" }}
            alt="khairul"
            width={600}
            height={700}
            className="rounded-md border-l-4 border-t-4 border-blue-400"
          />
          <div className="xl:flex xl:h-[800px] xl:w-[800px] xl:flex-col xl:items-center xl:justify-center">
            <p className="text-2xl xl:w-[800px]">
              Hi! I'm Khairul, a{" "}
              <span className="font-bold text-cyan-500">
                Full Stack Developer and AI Engineer🚀
              </span>{" "}
              from Dhaka, Bangladesh. I enjoy creating things that live on the
              internet, whether that be websites, applications, or anything in
              between. My goal is to always build products that provide
              pixel-perfect, performant experiences.
            </p>
            <p className="mt-4 text-2xl xl:w-[800px]">
              I'm a passionate learner who's always willing to learn and work
              across technologies and platforms. I love working on projects that
              challenge me to learn new things and are focused on customer
              needs. I'm currently working @SparkTech Agency and creating thing which i
              love with Coding and Creating AI system for client.
            </p>
            <p className="mt-4 text-2xl xl:w-[800px]">
              My educational background includes an BSc in Computer Science and
              Engineering from{" "}
              <span className="font-bold text-orange-500">
                East West Univeristy
              </span>
              . Throughout my university life, I've worked on exciting projects
              with amazing people. I'm always interested in a challenge and an
              opportunity to learn something new.
            </p>
          </div>
          <div>
            <h2></h2>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default About;
