/**
 * Work history as a vertical timeline.
 */
import { experience } from "../data/profile";
import { Section } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-10 border-l-2 border-line pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            {/* Timeline dot */}
            <span
              aria-hidden="true"
              className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-navy ring-2 ring-line"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-bold text-ink">
                {job.role} <span className="font-semibold text-navy">· {job.company}</span>
              </h3>
              <p className="text-sm text-slate">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate marker:text-accent">
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
