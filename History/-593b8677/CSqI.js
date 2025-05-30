import { useEffect, useRef } from 'react';

export function useCloseModal(closeFn) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) closeFn();
      }

      document.addEventListener('click', handleClick, true);
      return () => document.removeEventListener('click', handleClick, true);
    },
    [closeFn]
  );

  return [ref];
}
