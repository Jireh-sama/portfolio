import { Outlet, ScrollRestoration } from "react-router";
import SiteNav from "../controls/SiteNav";
import FooterSection from "../section/FooterSection";

const Layout = () => {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-primary px-3 py-2 font-mono text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className="min-h-[calc(100svh-3.5rem)]">
        <Outlet />
      </main>
      <FooterSection />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
