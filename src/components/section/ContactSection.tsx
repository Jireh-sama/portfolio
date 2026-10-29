import { useRef } from "react";
import { LuArrowRight, LuDownload, LuGithub, LuLinkedin } from "react-icons/lu";
import { Button } from "../ui/button";
import CopyEmailButton from "../controls/CopyEmailButton";
import { useReveal } from "@/hooks/useReveal";
import { composeMailLink, resume, socialContacts } from "@/lib/constants";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl px-4 pt-12 pb-28 sm:px-6 sm:pb-36"
    >
      <h2
        id="contact-title"
        data-reveal
        className="text-6xl leading-[0.92] font-bold tracking-[-0.05em] sm:text-7xl lg:text-8xl"
      >
        Let's build something.{" "}
        <span className="text-muted-foreground">Remote, full-stack.</span>
      </h2>

      <div data-reveal className="mt-12 flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="group px-6">
          <a href={composeMailLink} target="_blank" rel="noopener noreferrer">
            Send email
            <LuArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
        <CopyEmailButton email={socialContacts.gmail} />
        <Button asChild size="lg" variant="outline" className="px-5">
          <a href={socialContacts.github} target="_blank" rel="noopener noreferrer">
            <LuGithub />
            GitHub
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="px-5">
          <a href={socialContacts.linkedIn} target="_blank" rel="noopener noreferrer">
            <LuLinkedin />
            LinkedIn
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="px-5">
          <a href={resume.href} download={resume.fileName}>
            <LuDownload />
            Résumé
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
