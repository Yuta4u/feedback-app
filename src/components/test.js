const obj = [
  {
    name: "a",
    poin: 7,
  },
  {
    name: "a",
    poin: 9,
  },
  {
    name: "a",
    poin: 7,
  },
]

const temp = obj.reduce((a, b) => (a = a + b.poin), 0)
console.log(temp)
