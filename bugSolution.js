function myFunc() {
  const args = Array.from(arguments);
  console.log(args);
  console.log(args.map(arg => arg * 2));
}

myFunc(1, 2, 3); // Output: [1, 2, 3], [2, 4, 6]