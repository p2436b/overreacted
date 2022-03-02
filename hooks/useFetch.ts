import { useEffect, useState } from 'react';

const useFetch = <T>(url: string): Array<T> | null => {
  const [data, setData] = useState<Array<T> | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) throw new Error('Could not get data!');

      const data = await res.json();
      setData(data);
    })();
  }, [url]);

  return data;
};

export default useFetch;
