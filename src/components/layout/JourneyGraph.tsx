import { GRAPH, graphLayout } from "@/lib/journey";
import type { ReleaseI } from "@/lib/types";
import { cn } from "@/lib/utils";

interface JourneyGraphProps {
  releases: ReleaseI[];
  active: number;
  className?: string;
}

/**
 * The commit graph beside the stage. JourneySection's timeline moves
 * `.graph-playhead` (x/y) and `.graph-fill` (y2); React only styles the nodes.
 */
const JourneyGraph = ({ releases, active, className }: JourneyGraphProps) => {
  const { nodes, width, height, branchPath, firstBranch } = graphLayout(releases);
  const first = nodes[0];
  const last = nodes[nodes.length - 1];

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMid meet"
      className={cn("overflow-visible", className)}
    >
      <line x1={GRAPH.mainX} y1={first.y} x2={GRAPH.mainX} y2={last.y} className="stroke-line" strokeWidth={2} />
      {branchPath && (
        <>
          <path d={branchPath} fill="none" className="stroke-line" strokeWidth={2} />
          <path
            d={branchPath}
            fill="none"
            strokeWidth={2}
            className={cn(
              "stroke-primary transition-opacity duration-500",
              active >= firstBranch ? "opacity-60" : "opacity-0"
            )}
          />
        </>
      )}
      <line
        className="graph-fill stroke-primary"
        x1={GRAPH.mainX}
        y1={first.y}
        x2={GRAPH.mainX}
        y2={first.y}
        strokeWidth={2}
      />

      {nodes.map((node, i) => (
        <g key={releases[i].id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={4.5}
            strokeWidth={2}
            className={cn(
              "fill-background transition-colors duration-300",
              i <= active ? "stroke-primary" : "stroke-line"
            )}
          />
          <text
            x={GRAPH.labelX}
            y={node.y + 4}
            className={cn(
              "font-mono text-[11px] transition-colors duration-300",
              i === active ? "fill-foreground font-medium" : "fill-muted-foreground"
            )}
          >
            {releases[i].year}
          </text>
        </g>
      ))}

      <g className="graph-playhead">
        <circle r={13} className="fill-primary/15" />
        <circle r={7} className="fill-primary" />
      </g>
    </svg>
  );
};

export default JourneyGraph;
