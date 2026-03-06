import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res) {
  if (res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}${text}`);
  }
}

export async function apiRequest(
  method
  url
  data?| undefined,
) {
  const res = await fetch(url, {
    method,
    headers? { "Content-Type""application/json" } {},
    body? JSON.stringify(data) 
    credentials"include",
  });

  await throwIfResNotOk(res);
  return res;
}


export const getQueryFn(options{
  on401Behavior;
}) => QueryFunction =
  ({ on401}) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") , {
      credentials"include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions{
    queries{
      queryFn({ on401"throw" }),
      refetchInterval
      refetchOnWindowFocus
      staleTime,
      retry
    },
    mutations{
      retry
    },
  },
});
