import { useRef } from "react";
import { Link } from "react-router";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import FileViewer from "../controls/FileViewer";
import { useReveal } from "@/hooks/useReveal";
import { resume } from "@/lib/constants";
import type { NowI, PrincipleI, TechItemI } from "@/lib/types";

interface NowSectionProps {
  now: NowI;
  latestTag: string;
  projectCount: number;
  dependencies: TechItemI[];
  devDependencies: TechItemI[];
  principles: PrincipleI[];
}

const Punct = ({ children }: { children: string }) => <span className="text-dim">{children}</span>;

const PackageEntries = ({ items }: { items: TechItemI[] }) => (
  <ul className="grid gap-x-8 pl-[2ch] sm:grid-cols-2">
    {items.map((item, i) => (
      <li key={item.name} className="whitespace-nowrap">
        <span className="text-key">"{item.name}"</span>
        <Punct>: </Punct>
        <span className="text-add">"{item.role}"</span>
        {i < items.length - 1 && <Punct>,</Punct>}
      </li>
    ))}
  </ul>
);

const PackageJson = ({ dependencies, devDependencies }: Pick<NowSectionProps, "dependencies" | "devDependencies">) => (
  <div className="text-prose">
    <Punct>{"{"}</Punct>
    <div className="pl-[2ch]">
      <span className="text-key">"dependencies"</span>
      <Punct>{": {"}</Punct>
      <PackageEntries items={dependencies} />
      <Punct>{"},"}</Punct>
      <br />
      <span className="text-key">"devDependencies"</span>
      <Punct>{": {"}</Punct>
      <PackageEntries items={devDependencies} />
      <Punct>{"}"}</Punct>
    </div>
    <Punct>{"}"}</Punct>
  </div>
);

const Contributing = ({ principles }: { principles: PrincipleI[] }) => (
  <div className="text-prose">
    <p className="font-semibold text-foreground">
      <span className="text-dim"># </span>How I work
    </p>
    <ol className="mt-4 space-y-4">
      {principles.map((principle, i) => (
        <li key={principle.title}>
          <p className="font-medium text-foreground">
            <span className="text-dim">## </span>
            {i + 1}. {principle.title}
          </p>
          <p className="mt-1 font-sans text-sm leading-relaxed">{principle.description}</p>
        </li>
      ))}
    </ol>
  </div>
);

const NowSection = ({
  now,
  latestTag,
  projectCount,
  dependencies,
  devDependencies,
  principles,
}: NowSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      id="now"
      ref={sectionRef}
      aria-labelledby="now-title"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div data-reveal>
          <p className="inline-flex rounded bg-primary px-2 py-0.5 font-mono text-xs font-medium text-primary-foreground">
            HEAD → main · {latestTag}
          </p>
          <h2
            id="now-title"
            className="mt-6 text-5xl leading-[0.98] font-bold tracking-[-0.045em] text-balance sm:text-6xl"
          >
            {now.headline}
          </h2>

          <dl className="mt-9 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-[15px]">
            {now.facts.map((fact) => (
              <div key={fact.label} className="contents">
                <dt className="pt-0.5 font-mono text-xs text-muted-foreground">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div className="contents">
              <dt className="pt-0.5 font-mono text-xs text-muted-foreground">projects</dt>
              <dd>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-1.5 rounded-sm text-primary underline-offset-4 hover:underline"
                >
                  {projectCount} with release notes
                  <LuArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </dd>
            </div>
            <div className="contents">
              <dt className="pt-0.5 font-mono text-xs text-muted-foreground">résumé</dt>
              <dd>
                <a
                  href={resume.href}
                  download={resume.fileName}
                  className="inline-flex items-center gap-1.5 rounded-sm text-primary underline-offset-4 hover:underline"
                >
                  download PDF
                  <LuDownload aria-hidden className="size-3.5" />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div data-reveal>
          <FileViewer
            label="About my work"
            files={[
              {
                name: "package.json",
                content: <PackageJson dependencies={dependencies} devDependencies={devDependencies} />,
              },
              { name: "CONTRIBUTING.md", content: <Contributing principles={principles} /> },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default NowSection;
