/**
 * First screen: name, role, one-line pitch and the main calls to action.
 */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/profile";
import { ButtonLink } from "./ui";
import photo from "../assets/profile/profile.jpg";

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-16 sm:pt-40 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between"
      >
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-sm font-medium text-navy">
            <HiOutlineLocationMarker aria-hidden="true" />
            {profile.location}
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-navy sm:text-2xl">{profile.role}</p>
          <p className="mt-5 text-lg leading-relaxed text-slate">{profile.headline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#work">See my work</ButtonLink>
            <ButtonLink href={profile.links.linkedin} variant="secondary" icon={FaLinkedin}>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.github} variant="secondary" icon={FaGithub}>
              GitHub
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="secondary" icon={HiOutlineMail}>
              Email
            </ButtonLink>
          </div>
        </div>

        <img
          src={photo}
          alt={`Portrait of ${profile.name}`}
          className="h-36 w-36 shrink-0 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-56 sm:w-56"
        />
      </motion.div>
    </section>
  );
}
