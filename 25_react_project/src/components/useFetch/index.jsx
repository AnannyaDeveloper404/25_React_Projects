import { useEffect, useState } from "react";

export default function useFetch(url, option = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  async function fetchData() {
    try {
      const resp = await fetch(url, { ...option });
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      const result = await resp.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error}. Some Error occured`);
      setPending(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, pending, error };
}
