import Section from "./Section";
import Image from "next/image";
import { ProjectProps } from "@/config";

interface ProjectsComponentProps {
  projects: ProjectProps[];
}

export default function Projects({ projects }: ProjectsComponentProps) {
  return (
    <Section text="Featured Projects" href="projects">
      {projects.map(
        (
          { name, summary, image, video, linkPreview, linkPreviewLabel, linkSource, linkSourceLabel },
          index
        ) => {
          const top = 98 + index * 40;

          return (
            <div
              key={index}
              style={{ top: `${top}px` }}
              className="sticky mb-12 rounded-2xl border border-neutral/20 bg-black"
            >
              <div className="relative z-[1] grid w-full overflow-hidden rounded-2xl bg-[#1c232d]/85 before:absolute before:inset-0 before:z-[-1] before:rounded-2xl before:bg-[url(/raja.png)] before:bg-[length:128px] before:bg-repeat before:opacity-[5%] before:content-[''] sm:grid-cols-2">
                <div className="flex flex-col px-6 py-10 sm:px-8 sm:py-12">
                  <h3 className="mb-4 font-serif text-3xl font-medium text-primary">
                    {name}
                  </h3>
                  <p className="text-base leading-relaxed text-neutral">{summary}</p>
                  {(linkSource || linkPreview) && (
                    <div className="mt-8 flex gap-5 text-white">
                      {linkSource && (
                        <a
                          href={linkSource}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="after:relative after:bottom-[-5px] after:content-[url(/external.svg)] hover:underline"
                        >
                          {linkSourceLabel ?? "Source"}
                        </a>
                      )}
                      {linkPreview && (
                        <a
                          href={linkPreview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="after:relative after:bottom-[-5px] after:content-[url(/external.svg)] hover:underline"
                        >
                          {linkPreviewLabel ?? "Preview"}
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <div className="relative aspect-video w-full bg-black sm:aspect-auto sm:min-h-full">
                  {video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={image}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      aria-label={`${name} demo`}
                    >
                      {video.webm && <source src={video.webm} type="video/webm" />}
                      <source src={video.mp4} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        }
      )}
    </Section>
  );
}
