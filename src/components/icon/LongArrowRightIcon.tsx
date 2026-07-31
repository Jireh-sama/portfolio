interface LongArrowRightIconProps {
  className?: string;
}

/**
 * Long-tailed right arrow. The wide 40x16 viewBox gives the shaft far more
 * length than a stock icon-font arrow, and the heavy stroke weight is tuned
 * to sit alongside medium/semibold label text without looking spindly.
 */
const LongArrowRightIcon = ({
  className = "h-4 w-10",
}: LongArrowRightIconProps) => {
  return (
    <svg
      viewBox="0 0 40 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Long shaft */}
      <path d="M2 8H35" />
      {/* Arrow head */}
      <path d="M28.5 2.5L34 8L28.5 13.5" />
    </svg>
  );
};

export default LongArrowRightIcon;
