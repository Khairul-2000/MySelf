import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  return (
    <div className="mt-4 flex flex-col items-center justify-center p-6 text-center text-black">
      <hr className="my-4 w-full" />
      <footer className="text-black">
        <h2 className="mb-7 text-black dark:text-white">
          Khairul Islam &middot; Developer
        </h2>
        <h3 className="mb-7 text-black dark:text-white">Let's Connect. </h3>
        <ul className="mb-7 flex flex-row items-center justify-center gap-10 text-[#718096]">
          <li>
            <a href="https://x.com/ThisIsKhairul" target="_blank">
              <FaXTwitter size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/khairul-islam-6a0601195/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Khairul-2000" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="mailto:kahirulislam135@gmail.com" target="_blank">
              <MdEmail size={30} />
            </a>
          </li>
        </ul>
        <p className="text-black dark:text-white">
          &copy; {`${date.getFullYear()}`} Khairul Islam. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
