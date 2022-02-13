import { useEffect } from 'react'

export const useTitle = title => {
  useEffect(() => {
    if (!title) return
    document.title = title
  }, [title])
}
