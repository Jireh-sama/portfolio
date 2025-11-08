import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const blobsLight = [
  { fill: "#a5b4fc" },
  { fill: "#fbcfe8" },
  { fill: "#f0abfc" },
];

const blobsDark = [
  { fill: "rgba(99,102,241,0.18)" },
  { fill: "rgba(109,40,217,0.15)" },
  { fill: "rgba(49,46,129,0.12)" },
];
const BlobBackground = ({ className = "" }) => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    setIsDark(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const blobColors = isDark ? blobsDark : blobsLight;

  return (
    <div
      className={`absolute left-0 top-0 w-full h-[100vh] overflow-hidden pointer-events-none ${className} ${
        location.pathname !== "/" ? "hidden" : ""
      }`}
      style={{ zIndex: -1 }}
    >
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <filter id="blurMe" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="90" />
        </filter>
        <ellipse
  cx="350"
  cy="240"
  rx="280"
  ry="220"
  fill={blobColors[0].fill}
  filter="url(#blurMe)"
>
  <animate
    attributeName="cx"
    values="350;1570;350"
    dur="24s"
    repeatCount="indefinite"
    keyTimes="0;0.5;1"
  />
  <animate
    attributeName="cy"
    values="240;440;240"  // Only moves between y=240 (upper third) and y=440 (just below the middle)
    dur="22s"
    repeatCount="indefinite"
    keyTimes="0;0.5;1"
  />
</ellipse>
<ellipse
  cx="1570"
  cy="440"
  rx="320"
  ry="190"
  fill={blobColors[1].fill}
  filter="url(#blurMe)"
>
  <animate
    attributeName="cx"
    values="1570;500;1570"
    dur="38s"
    repeatCount="indefinite"
    keyTimes="0;0.5;1"
  />
  <animate
    attributeName="cy"
    values="440;240;440" // Swaps between middle and upper third
    dur="30s"
    repeatCount="indefinite"
    keyTimes="0;0.5;1"
  />
</ellipse>
<ellipse
  cx="1150"
  cy="160"
  rx="180"
  ry="260"
  fill={blobColors[2].fill}
  filter="url(#blurMe)"
>
  <animate
    attributeName="cy"
    values="160;340;160" // Swings only along the top
    dur="34s"
    repeatCount="indefinite"
    keyTimes="0;0.5;1"
  />
</ellipse>

      </svg>
    </div>
  );
}

export default BlobBackground