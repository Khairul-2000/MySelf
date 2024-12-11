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
          Fronted Master, udemy etc.
        </p>

        <div className="flex flex-col items-center justify-start gap-5 sm:flex-row sm:overflow-x-scroll md:overflow-hidden">
          <h2 className="ml-6 origin-left transform font-semibold text-white dark:text-black sm:rotate-90">
            Skills
            <div className="my-2 h-1 w-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          </h2>
          <div className="grid gap-3 p-6 sm:grid-cols-5">
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
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat vitae
        voluptates voluptate esse eius. Maxime atque nemo laboriosam dolorum
        voluptatibus libero ullam nulla voluptas repellat fuga ratione itaque
        impedit error iure dolorem, recusandae rem quos. Doloremque accusamus
        facere eum corporis hic, recusandae omnis aperiam, quisquam quas
        voluptates, molestiae amet perspiciatis? Eum fugit aliquam explicabo
        quisquam error distinctio eligendi veniam provident placeat impedit?
        Quae nobis ea perferendis dolorum suscipit reprehenderit deleniti eaque,
        culpa ad consequuntur veniam tempora sapiente impedit dolores eum
        dignissimos, quasi temporibus porro. Illo, hic reiciendis? Commodi
        fugiat corrupti iusto, iste quod labore perferendis recusandae assumenda
        nemo eveniet quibusdam, consectetur qui omnis ea laudantium pariatur
        dolorum cumque mollitia saepe, dolores necessitatibus? Necessitatibus
        amet cupiditate dolorum numquam, dolore voluptatibus magni neque
        doloribus totam libero voluptates labore eum omnis deleniti deserunt
        earum in? Repudiandae esse nobis minus illo cumque quidem quis
        necessitatibus reiciendis inventore incidunt voluptatum illum possimus
        voluptas eos, vel qui ab facilis laboriosam tempora nemo deserunt?
        Exercitationem perferendis aut placeat? Voluptas animi incidunt labore
        obcaecati natus repellendus itaque est unde tenetur, modi quae error!
        Ratione, dolorum delectus eos provident consequatur, obcaecati sapiente
        dolorem voluptas veniam modi necessitatibus? Adipisci ipsam eaque vero
        minima sit voluptatibus ullam nemo mollitia maiores, fugit sunt
        laboriosam enim optio. Molestias illo omnis ad ea saepe suscipit
        eveniet, similique incidunt vitae dolor distinctio minima sint? Atque et
        repellat doloremque adipisci ad, recusandae autem quidem modi? Quas,
        placeat veritatis facilis dolores sapiente aperiam aspernatur est velit
        quis voluptas tempora necessitatibus quidem iste similique magnam, atque
        consequatur! Odit similique repellat delectus iure ea consectetur quia
        debitis non! Magnam voluptatem ratione similique pariatur dignissimos
        animi facere molestias illum quisquam, alias, voluptatum, ut ipsa sed
        ullam et repellendus asperiores fugiat assumenda beatae dolor.
        Recusandae vel cum aspernatur enim quam, assumenda non accusamus optio
        velit laudantium provident at ratione dignissimos, magni voluptates
        cupiditate omnis animi. Repellat eaque molestiae temporibus, ad porro
        expedita tempora officia alias id perspiciatis, sunt et quia tenetur eum
        magnam iste nesciunt fuga quod molestias. Quasi magnam eveniet obcaecati
        praesentium quis neque, laboriosam possimus corrupti assumenda id fugiat
        accusantium aliquam deleniti iure! Dolore, quisquam. Neque veritatis
        quisquam, reiciendis qui accusantium voluptate est vitae odit nam
        mollitia blanditiis quaerat illum libero rem! Iusto tempore doloremque
        libero fugit nihil soluta iure repudiandae, numquam beatae distinctio
        dignissimos. Magni maiores esse dolor dicta eligendi distinctio ipsum
        ipsam ab laudantium exercitationem laboriosam aliquam facilis,
        repellendus molestiae rem adipisci recusandae dolorum consequuntur
        reprehenderit in impedit magnam inventore ea! Aliquid quia, odit nemo
        architecto cum enim unde atque pariatur magni officiis maxime a commodi
        facere incidunt sint at inventore libero suscipit! Soluta qui tenetur
        voluptatem esse, saepe est similique ratione doloribus consequatur!
        Voluptatem provident, esse quibusdam veritatis molestiae eaque
        doloribus, eos voluptas ratione blanditiis aperiam enim unde? Iure
        eligendi unde nihil in molestiae beatae minus quia, illum esse, fugiat
        itaque vitae doloremque impedit ipsum magni quasi quam dicta inventore?
        Voluptas consequatur adipisci voluptatibus nesciunt velit dolorum
        voluptate quibusdam repellendus cumque soluta rem hic molestias,
        doloremque aspernatur? Error adipisci aut rem sint expedita ipsa! Non
        voluptatem magnam saepe asperiores obcaecati nihil quos ut minus.
        Repudiandae quia cumque ea magni ut inventore voluptatem praesentium
        error, amet vitae fugit mollitia laboriosam eaque, perferendis
        doloremque reprehenderit repellendus neque rem esse, perspiciatis
        blanditiis! Quam debitis, aspernatur ea aperiam eius unde distinctio
        numquam! Doloribus temporibus sint vel dolor, delectus id quaerat
        explicabo quod atque animi laborum rerum corrupti corporis autem omnis
        tempore ea. Libero nihil cum perspiciatis nulla temporibus officia
        reprehenderit, neque ad eaque qui quaerat repellat doloremque quasi eos.
        Quae unde deserunt, id aliquam amet consequatur quod quisquam
        exercitationem obcaecati. Dolor placeat sequi aspernatur nisi provident
        alias quam odit voluptates pariatur, reprehenderit rem quae laboriosam
        voluptatem iusto exercitationem doloribus reiciendis, quas, labore
        similique voluptatibus! Nam cum, temporibus voluptate porro consectetur
        in at sint debitis ipsa eos natus iste pariatur quod magni architecto
        fugit aperiam placeat? Blanditiis recusandae dolores quam minus
        inventore ipsam aliquam unde qui ut aut aliquid a corrupti, ab nostrum
        fugiat eveniet architecto itaque praesentium possimus excepturi tempore
        enim obcaecati quae. Nemo, fugiat dolores praesentium quos at, provident
        qui in cum incidunt inventore, perferendis libero recusandae eum.
        Delectus cumque qui et libero distinctio soluta, est, fugiat, sint
        doloribus nesciunt dolorem voluptatibus vitae odit laboriosam id minus
        recusandae voluptas? Iste reiciendis a ratione atque quae, quas totam
        commodi aliquam consectetur ipsam! Expedita maiores id, provident
        temporibus tenetur culpa eum totam similique fugiat et quasi quam
        dolorum minus dolores voluptates quos iure dolor asperiores
        reprehenderit, aliquam iusto eveniet unde. Voluptatibus quod harum nihil
        sunt necessitatibus laudantium. Ullam explicabo dicta alias placeat ipsa
        impedit expedita fugiat ex suscipit earum illum deserunt soluta enim
        incidunt iure, molestias facere veritatis aliquam veniam voluptate ea
        aliquid aut! Quasi vel, odio quis aut ad necessitatibus accusantium.
        Voluptate, consectetur exercitationem odit cum facere, nulla, corporis
        dignissimos enim voluptatibus dolor excepturi nostrum voluptas beatae
        officia! Culpa ipsum reprehenderit reiciendis quae ea possimus aut ut
        laborum voluptas consequatur. Impedit illum sequi perspiciatis assumenda
        praesentium fugiat, enim similique ex nesciunt fugit consequatur
        expedita non veritatis eveniet rerum ipsam iure? Vitae earum eos
        suscipit unde reiciendis architecto, voluptatem harum nihil atque,
        tenetur iure optio officia, modi inventore a. Nam sunt soluta laborum
        culpa perferendis! Aut sit doloribus nam consequuntur tempore asperiores
        unde culpa veniam, molestiae, fugiat blanditiis cum nobis ab. Laudantium
        ab alias consectetur aliquid dolorem accusamus fugit saepe, tenetur ipsa
        aliquam, maiores repellat error debitis iusto reiciendis voluptate
        repudiandae! Explicabo officiis nulla maiores! Iste nihil quis velit
        vel. Animi blanditiis minima doloribus repudiandae molestiae accusantium
        corrupti voluptatibus cum iusto autem harum, quasi explicabo saepe
        libero, vel numquam? Nemo, quisquam possimus? Eveniet maxime qui
        accusamus, est natus doloribus ad corporis nostrum, maiores nam
        consectetur praesentium pariatur. Repellat, quas provident neque
        blanditiis saepe autem, assumenda eaque sint iste reiciendis voluptatum!
        Doloremque illo at, aspernatur culpa dolores rerum non pariatur fuga
        itaque praesentium error ut molestias laboriosam exercitationem aperiam
        modi facilis nostrum architecto aliquid quis, perferendis quos
        explicabo? Atque, illo esse. Officia praesentium aspernatur ea
        asperiores esse deserunt nemo perferendis maiores, veritatis sunt non
        nostrum id dolores tempora, totam voluptatum sapiente debitis.
      </p>
    </div>
  );
}
