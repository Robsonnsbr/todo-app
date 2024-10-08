import React from 'react';

interface IconProps {
  isEditing: boolean | undefined;
}
export const IconColor = ({ isEditing }: IconProps) => {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.496 16.547s-2 2.17-2 3.5a2 2 0 004 0c0-1.33-2-3.5-2-3.5zm-13.79-1.5l4.79-4.79 4.79 4.79m1.77-1.06l-8.94-8.94-1.41 1.41 2.38 2.38-5.15 5.15c-.59.56-.59 1.53 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.59.59-1.56 0-2.12z"
          fill="var(--deepGray)"
        />
        <path
          d="M12.564 20.044L7.734 15h9.568l-4.738 5.044z"
          fill={`${isEditing ? 'var(--starYellow)' : 'var(--deepGray)'}`}
        />
      </svg>
    </div>
  );
};
