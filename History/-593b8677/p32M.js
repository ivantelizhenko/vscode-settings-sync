import { useEffect, useRef } from 'react';

function useCloseModal(modalRef) {
  const ref = useRef(null);

  useEffect(function () {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
}
