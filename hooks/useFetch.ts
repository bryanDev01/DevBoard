import { useCallback, useEffect, useState } from "react"

type useFetchReturn<T> = {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

type useFetcState<T> = 
  | { current: "idle", data: null, loading: false, error: null}
  | { current: "loading", data: null, loading: true, error: null}
  | { current: "success", data: T, loading: false, error: null}
  | {current: "error", data: null, loading: false, error: string}

export function useFetch<T>(url: string): useFetchReturn<T> {
  const [status, setStatus] = useState<useFetcState<T>>({
    current: "idle",
    data: null,
    loading: false,
    error: null
  })

  const fetchData = useCallback(async() => {
    const controller = new AbortController()
    setStatus({current: "loading", data: null, loading: true, error: null})

    try {
      const res = await fetch(url, { signal: controller.signal})
      if(!res.ok) throw new Error(`Error during the deta fetching ${res.status}`)
      const json: T = await res.json()
      setStatus({ current: "success", data: json, loading: false, error: null })
    }catch(err: unknown) {
      if(err instanceof Error) setStatus({ current: "error", data: null, loading: false, error: err.message})
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data: status.data, loading: status.loading, error: status.error, refetch: fetchData}
  
}