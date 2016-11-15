export default function toggleArrayItem(a, v) {
  const i = a.indexOf(v)
  if (i === -1) a.push(v)
  else a.splice(i, 1)
}
