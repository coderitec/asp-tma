import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterDetails from "./FooterDetails";

export default function Footer() {
  return (
    <footer className='bg-slate-950 text-slate-300 min-h-[50vh] py-10 px-8'>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 py-8">
          <section className="flex flex-col gap-y-4">
            <h2>Coding Task</h2>
            <p>Effectively manage your tasks daily, weekly or even yearly, not missing out on anything.</p>

            <div className="text-3xl flex space-x-2 items-start">
                <Link href='#' title="GitHub account" className="cursor-pointer">
                <FaGithub />
                </Link>

                <Link href='#' title="LinkedIn Profile" className="cursor-pointer">
                <FaLinkedinIn />
                </Link>

                <Link href='#' title="Instagram handle" className="cursor-pointer">
                <FaInstagram />
                </Link>

            </div>

          </section>
          <section className="flex flex-col gap-y-4">
            <h2>About</h2>
            <ul className="flex flex-col gap-y-4">
                <FooterDetails title="About" />
                <FooterDetails title="Features" />
                <FooterDetails title="News & Articles" />
            </ul>
          </section>
          <section className="flex flex-col gap-y-4">
            <h2>Support</h2>
            <ul  className="flex flex-col gap-y-4">
                <FooterDetails title="FAQs"/>
                <FooterDetails title="Contact Us"/>
                <FooterDetails title="Support Center"/>
                <FooterDetails title="Security"/>
            </ul>
          </section>
          <section className="flex flex-col gap-y-4">
            <h2>Partner</h2>
            <ul className="flex flex-col gap-y-4">
                <FooterDetails title="Our Partners"/>
                <FooterDetails title="Subscribe"/>
            </ul>
          </section>
        </div>
        <div>
            <p className='text-center py-10 border-t-2 border-t-slate-500'>All rights reserved &copy;Coderite {new Date().getFullYear()}  </p>
        </div>
    </footer>
  )
}
