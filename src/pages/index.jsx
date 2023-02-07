import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Yun Gu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grow px-10 grid content-center dark:bg-zinc-800/90 md:px-20 lg:px-40">
          <section className="text-center p-10 py-10 grid place-content-center">
            <h2 className="text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 font-medium dark:{text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-medium} md:text-6xl">
              Yun Gu
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I make arts with codes. Looking for new challenges!
            </p>
            <div className="text-3xl flex justify-center gap-4 py-3 text-gray-600 dark:text-gray-400">
              <SocialLink
                href="https://github.com/YunaGu"
                aria-label="Follow on GitHub"
                icon={FaGithub}
              />
              <SocialLink
                href="https://www.linkedin.com/in/yun-gu-2a0a58229/?trk=public-profile-join-page"
                aria-label="Follow on Linkedin"
                icon={FaLinkedin}
              />
              <SocialLink
                href="./lib/YunGuCV.pdf"
                aria-label="Download CV"
                icon={HiAcademicCap}
              />
            </div>
          </section>
      </main>
    </>
  )
}
