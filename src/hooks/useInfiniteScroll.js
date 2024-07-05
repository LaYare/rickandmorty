import { useEffect, useCallback } from 'react';

const useInfiniteScroll = (callback, hasMore, loading) => {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.scrollHeight &&
      hasMore &&
      !loading
    ) {
      callback();
    }
  }, [callback, hasMore, loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return null;
};

export default useInfiniteScroll;
