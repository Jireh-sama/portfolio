import { useLocation } from "react-router";
import BackButton from "../controls/BackButton";

interface ItemNotFoundProps {
  title: string
  description: string
  redirectLink?: string
  redirectLabel?: string
}

const ItemNotFound = ({
  title,
  description,
  redirectLink = "/",
  redirectLabel = "back to main",
}: ItemNotFoundProps) => {
  const { pathname } = useLocation();

  return (
    <div className="mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
      <p className="font-mono text-sm leading-7 break-all text-muted-foreground">
        <span className="text-primary">$</span> git checkout {pathname}
        <br />
        <span className="text-del">error:</span> pathspec '{pathname}' did not match any file(s) known to git
      </p>
      <h1 className="mt-8 text-5xl font-bold tracking-[-0.045em] sm:text-6xl">{title}</h1>
      <p className="mt-4 max-w-lg text-prose">{description}</p>
      <BackButton to={redirectLink} label={redirectLabel} className="mt-10 self-start" />
    </div>
  );
};

export default ItemNotFound;
