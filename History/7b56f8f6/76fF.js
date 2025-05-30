import { useEffect } from 'react';

export function useKey(key, callback) {
  useEffect(() => {
    function callback(e) {
      if (e.code === 'Escape') callback();
    }

    document.addEventListener('keydown', callback);

    return () => document.removeEventListener('keydown', callback);
  }, [callback]);
}
