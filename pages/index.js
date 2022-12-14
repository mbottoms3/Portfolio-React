import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import image1 from "../public/f00000d.jpeg";
import image2 from "../public/blogSite.png";
import image3 from "../public/kissTheCook.png";
import image4 from "../public/JATE.png";
import image5 from "../public/micah.jpg";
// import { Document, Page } from "react-pdf";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Micah Bottoms Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
        </style>
      </Head>

      <main className="bg-gradient-to-b from-skyBlue to-light">
        <div>
          <div className="py-4">
            <h2 className="text-5xl text-center mx-2 py-5 bg-light rounded-full lg:mx-96">
              Micah Bottoms
            </h2>
          </div>

          <div className="flex justify-between">
            <button className="px-12 mx-2 my-24 lg:px-20 lg:mx-8 rounded-full bg-light hover:shadow-xl">
              Resume
            </button>
            <nav className="py-4 mb-8 flex justify-between">
              <div className="bg-yellow-200 rounded-full py-28 mr-2 md:mr-6 lg:mr-8">
                <ul className="flex">
                  <li className="ml-3 hover:shadow-md hover:shadow-yellow-400">
                    <a href="#bio">About Me</a>
                  </li>
                  <li className="mx-4 hover:shadow-md hover:shadow-yellow-400">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="mr-3 hover:shadow-md hover:shadow-yellow-400">
                    <a href="#contact">Find Me</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* Section with Projects Heading and Projects */}
        <div>
          <div id="projects">
            <h3 className="text-center text-4xl mb-4">Projects</h3>
            <p className="text-center mb-6">
              Projects I have worked on with links below
            </p>
            {/* Projects container */}
            <div className="flex flex-col md:flex-row lg:flex-row justify-center text-center">
              {/* Project 1 */}
              <div className="bg-light my-2 mx-4 py-2 shadow-md rounded-lg hover:shadow-xl lg:mx-4 lg:hover:shadow-xl">
                <div className="py-2 px-2">
                  <a
                    href="https://chuckfee23.github.io/project1-group5/"
                    target="_blank"
                  >
                    <Image
                      className="rounded-lg"
                      width={"350px"}
                      height={"200px"}
                      src={image1}
                    />
                  </a>
                </div>

                <h3 className="text-xl">F00000d</h3>
                <p className="text-sm">A single page API app</p>
                <a
                  className="text-sm text-blue-600"
                  href="https://github.com/chuckfee23/project1-group5"
                  target="_blank"
                >
                  Github Repository
                </a>
              </div>

              {/* Project 2 */}
              <div className="bg-light my-2 py-2 shadow-sm rounded-lg mx-4 hover:shadow-lg lg:mx-4 lg:hover:shadow-xl">
                <div className="py-2 px-2">
                  <a
                    href="https://enigmatic-meadow-07439.herokuapp.com/"
                    target="_blank"
                  >
                    <Image
                      className="rounded-lg"
                      width={"350px"}
                      height={"200px"}
                      src={image2}
                    />
                  </a>
                </div>
                <h3 className="text-xl">Tech Blog</h3>
                <p className="text-sm">A fullstack web app</p>
                <a
                  className="text-sm text-blue-600"
                  href="https://github.com/mbottoms3/CMS_Blog_Site"
                  target="_blank"
                >
                  Github Repository
                </a>
              </div>

              {/* Project 3 */}
              <div className="bg-light my-2 py-2 shadow-md rounded-lg mx-4 hover:shadow-sm lg:mx-4 lg:hover:shadow-xl">
                <div className="py-2 px-2">
                  <a
                    href="https://kiss-the-cook.herokuapp.com/"
                    target="_blank"
                  >
                    <Image
                      className="rounded-lg"
                      width={"350px"}
                      height={"200px"}
                      src={image3}
                    />
                  </a>
                </div>

                <h3 className="text-xl">Kiss the Cook</h3>
                <p className="text-sm">A fullstack web app</p>
                <a
                  className="text-sm text-blue-600"
                  href="https://github.com/madrodgerflynn/Kiss_The_Cook"
                  target="_blank"
                >
                  Github Repository
                </a>
              </div>

              {/* Project 4 */}
              <div className="bg-light my-2 py-2 shadow-lg rounded-lg mx-4 hover:shadow-sm lg:mx-4 lg:hover:shadow-xl">
                <div className="py-2 px-2">
                  <a href="">
                    <Image
                      className="rounded-lg"
                      width={"350px"}
                      height={"200px"}
                      src={image4}
                    />
                  </a>
                </div>

                <h3 className="text-xl">JATE</h3>
                <p className="text-sm">A progressive web application</p>
                <a
                  className="text-sm text-blue-600"
                  href="https://github.com/mbottoms3/Text_Editor_App"
                  target="_blank"
                >
                  Github Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About me */}
        <div id="bio" className="text-center mt-16 mx-2 lg:mx-48">
          <h3 className="text-4xl mb-6">About Me</h3>
          {/* Image Div */}
          <div className="mx-2 md:px-2">
            <div className="rounded-xl bg-light md:mx-2 lg:px-40 py-4">
              <Image
                className="rounded-md"
                width={"230px"}
                height={"320px"}
                src={image5}
              />
            </div>
          </div>
          {/* Bio text */}
          <p className="mx-2 md:px-2">
            Hello! My name is Micah Bottoms and I'm a software developer! I
            learned how to code through the University of Denver and I'm excited
            to begin my career. I have really enjoyed the problem solving that
            development brings, as it's an exciting challenge each time. I am
            based out of the United States, in Shreveport, Louisiana
            specifically. Some of my favorite languages and technologies
            include: Javascript, Mongoose, GraphQL and Tailwind CSS.
          </p>
        </div>
      </main>
      <div className="pt-20 pb-8 bg-gradient-to-b from-light to-skyBlue">
        <h3 className="text-4xl text-center mb-10">
          Find me with the links below!
        </h3>
        <div id="contact" className="text-4xl flex justify-center gap-12 m-2">
          <a
            className="hover:shadow-md hover:shadow-black"
            href="https://www.linkedin.com/in/micah-bottoms-09a096246/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>

          <a
            className="hover:shadow-md hover:shadow-black"
            href="https://github.com/mbottoms3"
            target="_blank"
          >
            <AiFillGithub />
          </a>

          <a
            className="hover:shadow-md hover:shadow-black"
            href="mailto: bottoms.micah.3@gmail.com"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
}
