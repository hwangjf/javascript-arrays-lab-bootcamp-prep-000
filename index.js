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