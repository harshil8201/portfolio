/**
 * Closing call to action plus the site footer.
 */
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/profile";
import { ButtonLink, Section } from "./ui";

export default function Contact() {
  return (
    <>
      <Section id="contact">
        <div className="rounded-3xl bg-navy px-6 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Contact</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Let's work together</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            I'm open to full stack, frontend and backend developer roles in Canada, remote or
            hybrid. The fastest way to reach me is email.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-white/90"
            >
              <HiOutlineMail aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-line py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <div className="flex gap-3">
            <ButtonLink href={profile.links.linkedin} variant="secondary" icon={FaLinkedin}>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.github} variant="secondary" icon={FaGithub}>
              GitHub
            </ButtonLink>
          </div>
        </div>
      </footer>
    </>
  );
}
