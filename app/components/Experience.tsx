import Section from "./Section";
import { ExperienceBullet, ExperienceProps, ExperienceSummaryPart } from "@/config";

interface ExperienceComponentProps {
  experience: ExperienceProps[];
}

function renderSummaryPart(part: ExperienceSummaryPart, key: number) {
  if (typeof part === "string") {
    return <span key={key}>{part}</span>;
  }

  return (
    <a
      key={key}
      href={part.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary after:relative after:bottom-[-3px] after:content-[url(/external.svg)] hover:underline"
    >
      {part.text}
    </a>
  );
}

function renderBullet(bullet: ExperienceBullet) {
  if (typeof bullet === "string") {
    return bullet;
  }

  return bullet.map((part, partIndex) => renderSummaryPart(part, partIndex));
}

export default function Experience({ experience }: ExperienceComponentProps) {
  return (
    <Section text="Work Experience" href="experience">
      {experience.map(({ company, position, startDate, endDate, summary }, index) => {
        return (
          <div key={index} className="mb-10">
            <h3 className="mb-1.5 font-serif text-2xl font-semibold text-white">
              {company}
            </h3>
            <div className="flex flex-col items-start pb-5">
              <h4 className="mb-0.5 font-serif text-2xl font-medium text-primary">
                {position}
              </h4>
              <span className="pb-[2px] text-sm text-white/70">
                {endDate ? `${startDate} — ${endDate}` : startDate}
              </span>
            </div>
            <ul className="list-none">
              {summary.map((bullet, logIndex) => (
                <li
                  key={logIndex}
                  className="relative mb-3 pl-8 text-base text-neutral before:absolute before:top-1 before:left-0 before:content-[url(/check.svg)]"
                >
                  {renderBullet(bullet)}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </Section>
  );
}
