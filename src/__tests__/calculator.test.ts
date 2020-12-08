import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

/* dataset.forEach((object) => {
  switch(object.method) {
    case "add": 
      console.log(calculator.add(object.x, object.y));
      break;
    case "subtract":
      console.log(calculator.subtract(object.x, object.y));
      break;
    case "multiply":
      console.log(calculator.multiply(object.x, object.y));
      break;
    case "divide":
      console.log(calculator.divide(object.x, object.y));
      break;
    default:
      console.log("The calculator method does not exist");
  }

}); */

describe("Calculator", () => {
  dataset.forEach((object) => {
    switch(object.method) {
      case "add": 
        test(`should add x & y`, () => {
          let result = calculator.add(object.x, object.y);
          expect(result).toBe(object.x + object.y);
        });
        break;
      case "subtract":
        test(`should subtract x & y`, () => {
          let result = calculator.subtract(object.x, object.y);
          expect(result).toBe(object.x - object.y);
        });
        break;
      case "multiply":
        test(`should multiply x & y`, () => {
          let result = calculator.multiply(object.x, object.y);
          expect(result).toBe(object.x * object.y);
        });
        break;
      case "divide":
        test(`should divide x & y`, () => {
          let result = calculator.divide(object.x, object.y);
          expect(result).toBe(object.x / object.y);
        });
        break;
      default:
        console.log("The calculator method does not exist");
    }
  });
});
