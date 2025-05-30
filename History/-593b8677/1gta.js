import { useEffect, useRef } from 'react';

export function useOutsideClick(handleFunction) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handleFunction();
      }

      document.addEventListener('click', handleClick, true);
      return () => document.removeEventListener('click', handleClick, true);
    },
    [handleFunction]
  );

  return ref;
}
