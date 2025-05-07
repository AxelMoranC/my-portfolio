import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/axel.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5  "
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Hi, I'm Axel Moran Caballero
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A software engineer with a passion for building web applications and
          exploring new technologies. 
        </p>
        <p>
        Over the past few years, I’ve completed internships in full-stack development, QA automation, and performance optimization at companies like BetterSleep, Actalent, and VuWall.
         I’ve worked with technologies like React, TypeScript, Firebase, Docker, and Spring Boot to ship impactful features, improve system reliability and {""}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/axel-moran-caballero-9324ab263/"
          >
            more
          </a>
          .
        </p>
        <p>
          I am a third-year undergraduate at Concordia University studying Computer Science.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
            <li className="inline text-sm">Python</li>
            <span className="mx-2 text-sm">|</span>
            <li className="inline text-sm">JavaScript</li>
            <span className="mx-2 text-sm">|</span>
            <li className="inline text-sm">TypeScript</li>
            <span className="mx-2 text-sm">|</span>
            <li className="inline text-sm">React</li>
            <span className="mx-2 text-sm">|</span>
            <li className="inline text-sm">Java</li>
            <span className="mx-2 text-sm">|</span>
            <li className="inline text-sm">C</li>
            <span className="mx-2 text-sm">|</span>
            <li className="inline text-sm">C++</li>
            <span className="mx-2 text-sm">|</span>
            <li className="inline text-sm">NodeJS</li>
            <span className="mx-2 text-sm">|</span>
            <li className="inline text-sm">SQL</li>
        </ul>
      </div>
    </section>
  );
}
