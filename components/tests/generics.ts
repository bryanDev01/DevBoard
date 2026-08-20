const items = [
  {id: "1", first: "item1"},
  {id: "2", second: "item2"},
  {id: "3", third: "item3"}
]

const genericFunction = <T>(a: T, b: number): [T, number] => {
 return [a , b]
}

console.log(genericFunction("hola", 2))

export function findById<T extends { id: string}>(items: T[], id: string) {
  return items.find((item) => item.id === id)
}

findById(items, "1")