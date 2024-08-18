import * as React from 'react';

const StarIcon = ({
  isFilled = false,
  fillColor = 'gold',
  strokeColor = 'var(--deepGray)'
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon
        fill={isFilled ? fillColor : 'none'}
        points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8"
      />
    </svg>
  );
};

export default StarIcon;
