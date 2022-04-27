function sum(a=0, b=0) {
  return a + b
}

function subtract(a = 0, b = 0) {
  return a - b
}

function divide(a, b) {
  if (b > 0) {
    return a / b
  } else {
    throw new Error('Cannot divide by 0')

  }
}

function multiply(a, b) {
  if (a > 0 && b > 0) {
    return a * b
  }
  else if (a === 0 || b === 0) {
    return 0
  }
  else if (a < 0 || b < 0) {
    return a * b
  }

}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
