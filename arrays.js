var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  let temp = [...array]
  temp.unshift(element)
  return temp
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  let temp = [...array]
  temp.push(element)
  return temp
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
