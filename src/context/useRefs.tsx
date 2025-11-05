import { createContext, useRef, useContext, type ReactNode } from "react";

type RefsContextType = {
  techStackRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
};


const RefsContext = createContext<RefsContextType | null>(null);

export function RefsProvider({ children }: { children: ReactNode }) {
  const techStackRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  return (
    <RefsContext.Provider
      value={{ techStackRef, projectRef, experienceRef, educationRef }}
    >
      {children}
    </RefsContext.Provider>
  );
}

export function useRefs() {
  const ctx = useContext(RefsContext);
  if (!ctx) throw new Error("useRefs must be used within a RefsProvider");
  return ctx;
}
