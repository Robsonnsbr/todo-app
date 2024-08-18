import { useEffect } from 'react';

type OutsideEventHandler = (event: MouseEvent | Event) => void;

export const useOutsideEvents = (
  ref: React.RefObject<HTMLElement>,
  callback: OutsideEventHandler
): void => {
  useEffect(() => {
    const handleOutsideEvent = (event: MouseEvent | Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener('click', handleOutsideEvent);
    document.addEventListener('scroll', handleOutsideEvent);

    return () => {
      document.removeEventListener('click', handleOutsideEvent);
      document.removeEventListener('scroll', handleOutsideEvent);
    };
  }, [ref, callback]);
};
