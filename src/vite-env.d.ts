interface ImportMetaEnv {
  readonly VITE_NODE_ENV: "DEVELOPMENT" | "PRODUCTION";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
