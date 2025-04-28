import React from "react";
import logoImg from "../utils/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDev,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-9">
      <div className="lg:px-10">
        <hr className="h-px my-6 lg:mx-auto bg-zinc-600 border-none" />
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-2/5 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <div className="pl-4 lg:pl-10">
              <img
                className="w-[10rem] mx-auto lg:mx-0"
                src={logoImg}
                alt="logo"
              />

              <h1 className="text-white">
                DEVELOPED BY{" "}
                <span className="inline-flex">
                  <a
                    href=""
                    className="block mt-2 text-sm hover:underline hover:font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ADITYARAJ SINGH
                  </a>
                </span>
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Connect with me and find my corner of web development. Find me
                below!
              </p>

              <div className="flex justify-center lg:justify-start mt-3 -mx-2 text-white text-2xl">
                <a
                  href="https://www.linkedin.com/in/adityaaraj/"
                  className="mx-2 hover:text-gray-400"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/Adityaraj-Singhh"
                  className="mx-2 hover:text-gray-400"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://codolio.com/profile/adityaraj_singh"
                  className="mx-2 hover:text-gray-400"
                  aria-label="DEV"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faDev} />
                </a>

                <a
                  href=""
                  className="mx-2 hover:text-gray-400"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:pt-5">
            <div className="grid grid-cols-1 gap-6 text-center md:ml-[7rem] sm:ml-[10rem] lg:ml-0 sm:text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 lg:mt-0">
              <div>
                <h3 className="text-white font-bold uppercase">About</h3>
                <a
                  href="https://portfolio-two-green-84.vercel.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
                <a
                  href=""
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
                <a
                  href=""
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Me
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase">Projects</h3>
                <a
                  href=""
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  StreamGPT
                </a>
            
              </div>

              <div>
                <h3 className="text-white font-bold uppercase">Contact</h3>
                <span className="block mt-2 text-sm hover:text-white">
                  +91-9903605588
                </span>
                <span className="block mt-2 text-sm hover:text-white">
                  careers.adityaraj@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-zinc-600 border-none" />

        <div>
          <p className="text-center text-white text-sm lg:text-base">
            © Food Express 2024 - All rights reserved |{" "}
            <span className="inline-flex">
              <a
                href=""
                className="block mt-2 hover:underline hover:font-bold"
                target="_blank"
                rel="noreferrer"
              >
                Adityaraj Singh
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
