const useFetch = async <T>(url: string, session: any): Promise<T> => {
  const response = await fetch(`https://greengo-api-production.up.railway.app/api/${url}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${session?.user.token}`,
    },
    cache: 'no-cache',
  });

  return (await response.json()) as T;
};

export default useFetch;
