import { useEffect } from 'react';

export default (container, item, shouldScroll) => {
  const hash = document?.location.hash.substring(1);

  useEffect(() => {
    if (!shouldScroll || !container.current || item.get('id') !== hash) return;
    setTimeout(() => container.current.scrollIntoView(), 500);
  }, [container]);
};
