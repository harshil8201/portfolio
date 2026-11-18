/**
 * Work history as a vertical timeline.
 */
import { experience } from "../data/profile";
import { Section } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-8 border-l-2 border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            {/* Timeline dot */}
            <span
              aria-hidden="true"
              className="absolute -left-[33px] sm:-left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-navy ring-2 ring-line"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-bold text-ink sm:text-lg">
                {job.role} <span className="block font-semibold text-navy sm:inline">
                  <span className="hidden sm:inline">· </span>
                  {job.company}
                </span>
              </h3>
              <p className="text-sm text-slate">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate sm:mt-3 sm:text-base marker:text-accent">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
