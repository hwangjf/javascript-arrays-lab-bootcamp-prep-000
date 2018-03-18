const app = "I don't do much."

function destructivelyAppendKitten (name) {
  kittens.push(name)
  return name
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten (name) {
  return [...kittens, name]
}

function prependKitten (name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  kittens.slice(-1)
  return kittens
}

function removeFirstKitten() {
 return kittens.slice(0)
}