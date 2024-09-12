const fibonacci = (n) => {
  if (n <= 0) {
    throw new Error("input must be a positive value");
  }

  // base cases == ===
  if (n === 1) return 0;
  if (n === 2) return 1;

  // initialize
  let a = 0;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    const nextTerm = a + b;

    a = b;
    b = nextTerm;
  }
  return b;
};

try {
  console.log(fibonacci(5));
  console.log(fibonacci(10));
  // edge case
  console.log(fibonacci(0));
} catch (error) {
  console.error(error.message);
}
