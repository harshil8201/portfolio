/**
 * Short personal introduction.
 */
import { about } from "../data/profile";
import { Section } from "./ui";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="max-w-3xl space-y-4 text-base leading-relaxed sm:text-lg text-slate">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
