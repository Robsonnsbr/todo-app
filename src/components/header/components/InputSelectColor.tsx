import React, { useRef } from 'react';
import { useOutsideEvents } from 'src/hooks';
import { Color } from 'src/types/taskType';

interface InputSelectColorProps {
  color?: Color;
  handleColorChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelectColor = ({
  color,
  handleColorChange
}: InputSelectColorProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideEvents(selectRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (colorValue?: Color) => {
    const event = {
      target: { value: colorValue ?? Color.None }
    } as unknown as React.ChangeEvent<HTMLSelectElement>;
    handleColorChange(event);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-fit" title="filter color">
      <button
        onClick={toggleDropdown}
        className="flex items-center border rounded p-2 bg-white text-black"
        style={{ minWidth: '2rem', minHeight: '2rem' }}
      >
        {color === undefined || color === Color.None ? (
          <div className="w-6 h-6 rounded-full border border-gray-300" />
        ) : (
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: color }}
          />
        )}
      </button>
      {isOpen && (
        <div
          ref={selectRef}
          className="fixed z-50 top-14 left-1/4 mt-2 flex-wrap   bg-white border border-gray-300 rounded shadow-lg"
        >
          <div className="flex flex-wrap gap-2 p-2">
            <div
              className="w-8 h-8 rounded-full border cursor-pointer"
              style={{ backgroundColor: Color.None }}
              onClick={() => handleOptionClick(Color.None)}
            />
            {Object.values(Color).map(
              (colorValue) =>
                colorValue !== Color.None && (
                  <div
                    key={colorValue}
                    className="w-8 h-8 rounded-full border cursor-pointer"
                    style={{ backgroundColor: colorValue }}
                    onClick={() => handleOptionClick(colorValue)}
                  />
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputSelectColor;
