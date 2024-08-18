import { useState, useEffect } from 'react';
import { UseFormRegister } from 'react-hook-form';
import StarIcon from 'src/utils/icons/StarIcon';

interface InputStarCheckBoxProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<any>;
  disabled?: boolean;
  id: string;
  onKeyDown?: any;
  className?: string;
  name: string;
  title: string;
  reset?: () => void;
}

export function InputStarCheckBox({
  onChange,
  register,
  disabled,
  id,
  onKeyDown,
  className,
  name,
  title,
  reset
}: InputStarCheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  const inputProps = register
    ? register(name, { onChange: handleToggle })
    : { onChange: handleToggle };

  useEffect(() => {
    if (reset) {
      setIsChecked(false);
    }
  }, [reset]);

  return (
    <div>
      <label
        onKeyDown={onKeyDown}
        style={{ cursor: `${disabled ? 'default' : 'pointer'}` }}
        className={className}
        tabIndex={0}
        title={title}
      >
        <input
          id={id}
          type="checkbox"
          aria-label="star"
          checked={isChecked}
          style={{ display: 'none' }}
          disabled={disabled}
          {...inputProps}
        />
        <span>
          <StarIcon isFilled={isChecked} />
        </span>
      </label>
    </div>
  );
}
