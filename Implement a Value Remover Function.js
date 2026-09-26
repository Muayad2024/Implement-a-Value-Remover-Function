//This function return all the elements that is not match the second arguments for example
//destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
function destroyer (arr, ...args) {
  const result = arr.filter(item => !args.includes(item));
  return result;
}
