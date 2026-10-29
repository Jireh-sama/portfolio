interface ImportMetaEnv {
  readonly VITE_NODE_ENV: "DEVELOPMENT" | "PRODUCTION";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/** Short git hash of the build, injected by vite.config.ts */
declare const __COMMIT_HASH__: string;
