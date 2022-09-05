import { useCallback, useState } from 'react';

export const useSort = (sort = {}) => {
  let key;
  let value;
  Object.entries(sort).map((k) => ((key = k[0]), (value = k[1])));
  const [sorts, setSorts] = useState({});
  const handlerSort = useCallback(() => {
    setSorts((p) => ({
      ...p,
      [key]: value,
    }));
  }, []);
  const sortArr = Object.values(sorts);
  return [sorts, sortArr, handlerSort];
};
