function destroyer (arr, ...args) {
  const result = arr.filter(item => !args.includes(item));
  return result;
}
