import Image from "next/image";
import myPhoto from "../images/photo3.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl mb-[35px]">About Me👋</h1>
      <div className="flex flex-row  gap-12 overflow-hidden object-cover object items-center mx-[35px]">
        <Image src={myPhoto} alt="khairul" width={400} height={400} />
        <div>
          <p className="text-2xl">
            Hi! I'm Khairul, a Web Developer and Data Scientest from Dhaka,
            Bangladesh. I enjoy creating things that live on the internet,
            whether that be websites, applications, or anything in between. My
            goal is to always build products that provide pixel-perfect,
            performant experiences.
          </p>
          <p className="mt-4 text-2xl">
            I'm a passionate learner who's always willing to learn and work
            across technologies and platforms. I love working on projects that
            challenge me to learn new things and are focused on customer needs.
            I'm currently working in home and creating thing which i love with
            Coding and Creating AI models for my own projects.
          </p>
          <p className="mt-4 text-2xl">
            My educational background includes an BSc in Computer Science and
            Engineering from East West Univeristy. Throughout my career, I've
            worked on exciting projects with amazing people. I'm always
            interested in a challenge and an opportunity to learn something new.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
