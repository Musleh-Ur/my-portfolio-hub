const RIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 724 561" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="r-gray" x1="12.5%" y1="0%" x2="87.5%" y2="100%">
        <stop offset="0%" stopColor="#CBCBCB" />
        <stop offset="100%" stopColor="#9E9E9E" />
      </linearGradient>
    </defs>
    {/* Outer ellipse */}
    <path
      d="M361.453 485.937C162.329 485.937 0.906 377.828 0.906 244.469C0.906 111.109 162.329 3 361.453 3C560.578 3 722 111.109 722 244.469C722 377.828 560.578 485.937 361.453 485.937ZM416.641 97.406C265.289 97.406 142.594 171.314 142.594 262.484C142.594 353.654 265.289 427.562 416.641 427.562C567.992 427.562 544.812 353.654 544.812 262.484C544.812 171.314 567.992 97.406 416.641 97.406Z"
      fill="url(#r-gray)"
    />
    {/* R letter */}
    <path
      d="M235 405V149h149c83 0 130 30 130 88 0 48-30 78-80 91l105 77h-95l-90-70h-49v70H235zm70-126h75c40 0 62-17 62-43s-22-43-62-43h-75v86z"
      fill="#2166B8"
    />
    {/* R leg extending below */}
    <path
      d="M482 367l53 193h-89l-48-155c25-8 55-20 84-38z"
      fill="#2166B8"
    />
  </svg>
);

export default RIcon;
