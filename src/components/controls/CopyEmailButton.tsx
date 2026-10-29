import { useEffect, useRef, useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { Button } from "../ui/button";

interface CopyEmailButtonProps {
  email: string;
}

const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard blocked (permissions / insecure context): fall back to the mail client.
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button type="button" variant="outline" size="lg" onClick={copy} className="px-5 font-mono text-[13px]">
      {copied ? <LuCheck className="text-primary" /> : <LuCopy />}
      <span aria-live="polite">{copied ? "copied to clipboard" : email}</span>
    </Button>
  );
};

export default CopyEmailButton;
