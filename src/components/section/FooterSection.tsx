import { repoUrl } from "@/lib/constants";

// Only link real hashes; local fallbacks like "dev" have no commit page.
const isCommitHash = /^[0-9a-f]{7,40}$/.test(__COMMIT_HASH__);

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {currentYear} Jireh · built with React + GSAP</p>
        <p>
          deployed from{" "}
          {isCommitHash ? (
            <a
              href={`${repoUrl}/commit/${__COMMIT_HASH__}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              {__COMMIT_HASH__}
            </a>
          ) : (
            <span className="text-primary">{__COMMIT_HASH__}</span>
          )}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
