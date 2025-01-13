import Image from "next/image";
import Link from "next/link";
import { photos } from "./images/photo";
import { BsBrowserChrome } from "react-icons/bs";
import EducationCard from "./_compontents/EducationCard";

export default function Home() {
  return (
    <div>
      {/* about section */}
      <div className="my-[60px]">
        <h1 className="animate-typewriter overflow-hidden whitespace-nowrap text-2xl font-bold">
          Hey, I'm Khairul...
        </h1>
        <p>
          I'm a full-stack developer from Bangladesh. I love to build things
          that live on the internet.
        </p>
      </div>
      {/* project section */}
      <section className="my-6">
        <h2>Projects</h2>
        <div className="mt-6 grid items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="project">
            <Link
              href="https://github.com/Khairul-2000/OrganizeMe"
              target="_blank"
              className="cursor-pointer"
            >
              <div>
                <Image
                  src={photos.project1}
                  alt="project-1"
                  height={300}
                  width={300}
                  className="mb-[15px] rounded-md"
                />
              </div>
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Link
                href="https://organize-me-khairul-islams-projects-c9bdf592.vercel.app/"
                className="animate-spin cursor-pointer"
                target="_blank"
              >
                <BsBrowserChrome size={25} />
              </Link>

              <h3>OrganizeMe</h3>
              <p>
                A simple and secure full-stack to-do app built with React (Vite)
                on the frontend and Express.js on the backend, using JWT for
                authentication.
              </p>
            </div>
          </div>

          <div className="project">
            <Link
              href="https://github.com/Khairul-2000/Flowmazon"
              target="_blank"
            >
              <Image
                src={photos.project2}
                alt="project-1"
                height={300}
                width={300}
                className="mb-[15px] rounded-md"
              ></Image>
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Link
                href="https://flowmazon-black.vercel.app/"
                className="animate-spin cursor-pointer"
                target="_blank"
              >
                <BsBrowserChrome size={25} />
              </Link>
              <h3>Flowmazon</h3>
              <p>
                Flowmazon is a full-featured e-commerce website built using the
                latest technologies, offering a modern and responsive shopping
                experience.
              </p>
            </div>
          </div>

          <div className="project">
            <Link
              href="https://github.com/Khairul-2000/Tea-Station"
              target="_blank"
            >
              <Image
                src={photos.project3}
                alt="project-1"
                height={300}
                width={300}
                className="mb-[15px] rounded-md"
              ></Image>
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Link
                href="https://fabulous-caramel-876aba.netlify.app/"
                className="animate-spin cursor-pointer"
                target="_blank"
              >
                <BsBrowserChrome size={25} />
              </Link>
              <h3>Tea-Station</h3>
              <p>
                A simple HTML and CSS project that showcases a modern and sleek
                design for a tea shop. Built with Flexbox and Grid.
              </p>
            </div>
          </div>
          <div className="project">
            <Link
              href="https://github.com/Khairul-2000/PetGrooming"
              target="_blank"
            >
              <Image
                src={photos.petgrooming}
                alt="project-1"
                height={300}
                width={300}
                className="mb-[15px] rounded-md"
              ></Image>
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Link
                href="https://pet-grooming-peach.vercel.app/"
                className="animate-spin cursor-pointer"
                target="_blank"
              >
                <BsBrowserChrome size={25} />
              </Link>
              <h3>Pet Grooming</h3>
              <p>
                A simple NextJs project that showcases a modern and sleek design
                for a Pet Grooming. Built with Tailwindcss and Motion.
              </p>
            </div>
          </div>
          <div className="project">
            <Link
              href="https://github.com/Khairul-2000/Back-Roads"
              target="_blank"
            >
              <Image
                src={photos.project4}
                alt="project-1"
                height={300}
                width={300}
                className="mb-[15px] rounded-md"
              ></Image>
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Link
                href="https://back-roads-webapp.netlify.app/"
                className="animate-spin cursor-pointer"
                target="_blank"
              >
                <BsBrowserChrome size={25} />
              </Link>
              <h3>Back-Roads</h3>
              <p>
                A simple HTML and CSS project that showcases a modern and sleek
                design for a tea shop. Built with Flexbox and Grid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-4 h-1 w-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      {/* Education */}
      <section>
        <h2 className="mb-10">Education</h2>
        <div className="grid grid-cols-3 p-10">
          <EducationCard
            resultTitle="CGPA"
            title="East West University"
            descrition="Computer Science and Engineering"
            result="3.48"
            outOff="4.0"
          />
          <EducationCard
            resultTitle="GPA"
            title="Dr. Mahbubur Rahman Mollah College"
            descrition="Higher Secondary Certificate"
            result="5.0"
            outOff="5.0"
          />
          <EducationCard
            resultTitle="GPA"
            title="Motijheel Model High School And Collage"
            descrition="Secondary School Certificate"
            result="5.0"
            outOff="5.0"
          />
        </div>
      </section>
      <div className="my-4 h-1 w-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      {/* Skills */}
      <section className="z-30 my-auto bg-black p-6 text-white shadow-lg shadow-black dark:bg-white dark:text-black">
        <h2 className="mb-6 text-center text-yellow-300">
          What I do <span className="font-extrabold text-yellow-400">?</span>
        </h2>
        <p className="text-center text-gray-500">
          I learn those skill From my university and from online Resources like
          Frontend Master, udemy etc.
        </p>

        <div className="flex flex-col items-center justify-start gap-5 sm:flex-row sm:overflow-x-scroll md:overflow-hidden">
          <h2 className="ml-6 origin-left transform font-semibold text-white dark:text-black sm:rotate-90">
            Skills
            <div className="my-2 h-1 w-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          </h2>
          <div className="grid grid-cols-3 gap-3 p-6 sm:grid-cols-5">
            <div className="card">
              <Image
                src="https://cdn-icons-png.freepik.com/256/5968/5968242.png?uid=R32684458&ga=GA1.1.34335686.1694932062&semt=ais_hybrid"
                alt="css"
                width={100}
                height={100}
              />
            </div>
            <div className="card bg-white">
              <Image src={photos.html} alt="css" width={150} height={150} />
            </div>
            <div className="card">
              <Image src={photos.react} alt="css" width={150} height={150} />
            </div>
            <div className="card bg-white">
              <Image src={photos.ts} alt="css" width={150} height={150} />
            </div>
            <div className="card">
              <Image src={photos.node} alt="css" width={150} height={150} />
            </div>
            <div className="card bg-white">
              <Image src={photos.java} alt="css" width={150} height={150} />
            </div>
            <div className="card">
              <Image
                src="https://miro.medium.com/v2/resize:fit:1400/1*gxOA6-EF8P8vnYdk3Bc9bg.png"
                alt="css"
                width={150}
                height={150}
              />
            </div>
            <div className="card bg-white">
              <Image src={photos.python} alt="css" width={150} height={150} />
            </div>
            <div className="card">
              <Image src={photos.c} alt="css" width={150} height={150} />
            </div>
            <div className="card">
              <Image src={photos.cplus} alt="css" width={150} height={150} />
            </div>

            <div className="card bg-white">
              <Image src={photos.mongo} alt="css" width={150} height={150} />
            </div>
            <div className="card">
              <Image
                src="https://vectorwiki.com/images/ScXaS__prisma.svg"
                alt="css"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="my-4 h-1 w-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      {/* Certification*/}
      <section>
        <h2 className="mb-10">Certifications</h2>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="flex flex-row items-center justify-center gap-6">
            <Image
              src="https://frontendmasters.com/static-assets/core/m-transparent.webp"
              alt="fronted masters"
              width={200}
              height={200}
              className="h-[140px] w-[140px] sm:h-[200px] sm:w-[200px]"
            />
            <div>
              <h3>Course Completed: API Design in Node.js, v4</h3>
              <p>Frontend Masters</p>
              <p>Issued Oct 2024 </p>
              <a
                target="_blank"
                href="https://static.frontendmasters.com/ud/c/c8c76b262a/AYUIUpryxz/api-design-nodejs-v4.pdf"
                className="my-2 flex w-44 flex-row gap-2 rounded-full border-2 border-black bg-yellow-50 p-1 px-3 dark:text-red-400"
              >
                Show credential
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/2901/2901214.png"
                  alt="link"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <Image
              src="https://frontendmasters.com/static-assets/core/m-transparent.webp"
              alt="fronted masters"
              width={200}
              height={200}
              className="h-[140px] w-[140px] sm:h-[200px] sm:w-[200px]"
            />
            <div>
              <h3>Course Completed: Introduction to Next.js 13 , v3</h3>
              <p>Frontend Masters</p>
              <p>Issued Oct 2024 </p>
              <a
                target="_blank"
                href="https://static.frontendmasters.com/ud/c/c8c76b262a/IUcTZCIWvj/next-js-v3.pdf"
                className="my-2 flex w-44 flex-row gap-2 rounded-full border-2 border-black bg-yellow-50 p-1 px-3 dark:text-red-400"
              >
                Show credential
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/2901/2901214.png"
                  alt="link"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <Image
              src="https://frontendmasters.com/static-assets/core/m-transparent.webp"
              alt="fronted masters"
              width={200}
              height={200}
              className="h-[140px] w-[140px] sm:h-[200px] sm:w-[200px]"
            />
            <div>
              <h3 className="">
                Course Completed: Introduction to Node.js, v3
              </h3>
              <p>Frontend Masters</p>
              <p>Issued Sep 2024 </p>
              <a
                target="_blank"
                href="https://static.frontendmasters.com/ud/c/c8c76b262a/ehyaBEyiou/node-js-v3.pdf"
                className="my-2 flex w-44 flex-row gap-2 rounded-full border-2 border-black bg-yellow-50 p-1 px-3 dark:text-red-400"
              >
                Show credential
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/2901/2901214.png"
                  alt="link"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
