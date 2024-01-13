// Function for calculating
export function calculateOutput(num1, num2, operation) {
  if (operation === "plus") {
    return num1 + num2;
  } else if (operation === "minus") {
    return num1 - num2;
  } else if (operation === "mul") {
    return num1 * num2;
  } else if (operation === "division") {
    return num1 / num2;
  }
}
