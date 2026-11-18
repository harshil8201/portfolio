/**
 * Skills grouped by area, each group as a card of tags.
 */
import { skills } from "../data/profile";
import { Section, Tag } from "./ui";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {skills.map(({ group, items }) => (
          <div key={group} className="rounded-2xl border border-line bg-white p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-navy">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
