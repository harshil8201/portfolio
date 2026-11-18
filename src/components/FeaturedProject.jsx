/**
 * Featured project card for Crevion: summary, key numbers, highlights and stack.
 */
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink, HiCheck } from "react-icons/hi";
import { crevion } from "../data/profile";
import { ButtonLink, Section, Tag } from "./ui";

export default function FeaturedProject() {
  return (
    <Section id="work" eyebrow="Featured project" title={crevion.name}>
      <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
        {/* Header band */}
        <div className="bg-gradient-to-br from-navy to-navy-dark px-5 py-6 text-white sm:px-10 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            {crevion.tagline}
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">{crevion.summary}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
            {crevion.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-wide text-white/70 sm:text-xs">{stat.label}</dt>
                <dd className="text-2xl font-bold sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Details */}
        <div className="px-5 py-6 sm:px-10 sm:py-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {crevion.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate sm:text-base">
                <HiCheck aria-hidden="true" className="mt-1 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {crevion.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            <ButtonLink href={crevion.liveUrl} icon={HiOutlineExternalLink}>
              Visit crevion.com
            </ButtonLink>
            <ButtonLink href={crevion.caseStudyUrl} variant="secondary" icon={FaGithub}>
              Architecture overview
            </ButtonLink>
          </div>
        </div>
      </article>
    </Section>
  );
}
