/**
 * Education and certifications side by side.
 */
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";
import { certifications, education } from "../data/profile";
import { Section } from "./ui";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Learning">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white p-6">
          <h3 className="flex items-center gap-2 font-bold text-ink">
            <HiOutlineAcademicCap aria-hidden="true" className="text-xl text-navy" />
            Education
          </h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-slate">
                  {item.school} · {item.period}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6">
          <h3 className="flex items-center gap-2 font-bold text-ink">
            <HiOutlineBadgeCheck aria-hidden="true" className="text-xl text-navy" />
            Certifications
          </h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="text-slate">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
