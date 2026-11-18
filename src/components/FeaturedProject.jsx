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
        <div className="bg-gradient-to-br from-navy to-navy-dark px-6 py-8 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            {crevion.tagline}
          </p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-white/90">{crevion.summary}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {crevion.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-white/70">{stat.label}</dt>
                <dd className="text-3xl font-bold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Details */}
        <div className="px-6 py-8 sm:px-10">
          <ul className="grid gap-3 sm:grid-cols-2">
            {crevion.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-slate">
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

          <div className="mt-8 flex flex-wrap gap-3">
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
