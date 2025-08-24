// components/ReLapLogo.jsx
const ReLapLogo = ({
    size = 40,
    color = "currentColor",
    strokeWidth = 2,
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="ReLap laptop logo"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Laptop screen */}
        <rect x="14" y="16" width="36" height="24" rx="2" ry="2" />

        {/* Laptop base */}
        <path d="M8 44h48l-4 4H12l-4-4z" />

        {/* Trackpad */}
        <rect x="30" y="44" width="4" height="2" rx="1" fill={color} stroke="none" />
    </svg>
);

export default ReLapLogo;
