import Image from "next/image";
import Link from "next/link";
import { photos } from "./images/photo";

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
          <Link
            href="https://github.com/Khairul-2000/OrganizeMe"
            target="_blank"
          >
            <div className="max-w-[400px] cursor-pointer">
              <Image
                src={photos.project1}
                alt="project-1"
                height={500}
                width={500}
                className="w-full rounded-md"
              ></Image>
              <div>
                <h3>OrganizeMe</h3>
                <p>
                  A simple and secure full-stack to-do app built with React
                  (Vite) on the frontend and Express.js on the backend, using
                  JWT for authentication.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Khairul-2000/Flowmazon"
            target="_blank"
          >
            <div className="max-w-[400px] cursor-pointer">
              <Image
                src={photos.project2}
                alt="project-1"
                height={500}
                width={500}
                className="rounded-md"
              ></Image>
              <div>
                <h3>Flowmazon</h3>
                <p>
                  Flowmazon is a full-featured e-commerce website built using
                  the latest technologies, offering a modern and responsive
                  shopping experience.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Khairul-2000/Tea-Station"
            target="_blank"
          >
            <div className="max-w-[400px] cursor-pointer">
              <Image
                src={photos.project3}
                alt="project-1"
                height={500}
                width={500}
                className="rounded-md"
              ></Image>
              <div>
                <h3>Tea-Station</h3>
                <p>
                  A simple HTML and CSS project that showcases a modern and
                  sleek design for a tea shop. Built with Flexbox and Grid.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Khairul-2000/PetGrooming"
            target="_blank"
          >
            <div className="max-w-[400px] cursor-pointer">
              <Image
                src={photos.petgrooming}
                alt="project-1"
                height={500}
                width={500}
                className="rounded-md"
              ></Image>
              <div>
                <h3>Pet Grooming</h3>
                <p>
                  A simple NextJs project that showcases a modern and sleek
                  design for a Pet Grooming. Built with Tailwindcss and Motion.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Khairul-2000/Back-Roads"
            target="_blank"
          >
            <div className="max-w-[400px] cursor-pointer">
              <Image
                src={photos.project4}
                alt="project-1"
                height={500}
                width={500}
                className="rounded-md"
              ></Image>
              <div>
                <h3>Back-Roads</h3>
                <p>
                  A simple HTML and CSS project that showcases a modern and
                  sleek design for a tea shop. Built with Flexbox and Grid.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className="my-4 h-1 w-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      {/* Education */}
      <section>
        <h2 className="mb-10">Education</h2>
        <div className="mb-7 flex flex-row gap-6">
          <div className="h-28 w-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex flex-col justify-between">
            <h4 className="text-green-500">2020</h4>
            <h4 className="text-purple-500">2024</h4>
          </div>
          <div className="my-auto">
            <h3>East West University</h3>
            <p>BSc in Computer Science and Engineering</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                CGPA: 3.48/4.0
              </span>
              <span className="text-sm italic text-gray-500 dark:text-white">
                "Medha Lalon Scholarship"
              </span>
            </div>
          </div>
        </div>
        <div className="mb-7 flex flex-row gap-6">
          <div className="h-28 w-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex flex-col justify-between">
            <h4 className="text-green-500">2018</h4>
            <h4 className="text-purple-500">2019</h4>
          </div>
          <div className="my-auto">
            <h3>Dr. Mahbubur Rahman Mollah College </h3>
            <p>Higher Secondary Certificate</p>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
              GPA: 5.0/5.0
            </span>
          </div>
        </div>
        <div className="mb-7 flex flex-row gap-6">
          <div className="h-28 w-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="flex flex-col justify-between">
            <h4 className="text-green-500">2016</h4>
            <h4 className="text-purple-500">2019</h4>
          </div>
          <div className="my-auto">
            <h3>Motijheel Model High School And Collage </h3>
            <p>Secondary School Certificate</p>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
              GPA: 5.0/5.0
            </span>
          </div>
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
