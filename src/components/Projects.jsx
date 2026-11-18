/**
 * Grid of smaller projects, each linking to its GitHub repository.
 */
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { projects } from "../data/profile";
import { Section, Tag } from "./ui";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="More things I've built">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            {project.image && (
              <img
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                loading="lazy"
                className="h-44 w-full border-b border-line object-cover object-top"
              />
            )}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-ink">{project.name}</h3>
                <FaGithub aria-hidden="true" className="text-xl text-slate group-hover:text-navy" />
              </div>
              <p className="mt-2 flex-1 text-sm text-slate sm:text-base">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                View on GitHub
                <HiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
