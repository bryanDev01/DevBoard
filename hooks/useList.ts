import { useCallback, useState } from "react";

export function useList<T extends { id: string }>(initialItems: T[] = []) {
  const [items, setItems] = useState<T[]>(initialItems)

  const addItem = useCallback((item: T) => {
    setItems((prev) => [...prev, item])
  }, [])

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateItem = (id: string, changes: T) => {
    setItems((prev) => prev.map((item) => (
      item.id === id ? {...item, ...changes} : item
    )))
  }

  const findItemById = (id: string) => {
    return items.find((item) => item.id === id)
  }

  return { items, addItem, updateItem, deleteItem, findItemById }
}