
function cubeNumber(number) {
  if (typeof number === 'number') {
    const result = number ** 3;
    return result;
  } else {
    return "Input is not a valid number";
  }
}
const input1 = 3;
const input2 = 4;

const output1 = cubeNumber(input1);
console.log(output1);
const output2 = cubeNumber(input2);
console.log(output2);



