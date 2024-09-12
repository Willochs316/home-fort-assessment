const calculateTriangleArea = (base, height) => {
  // check if both the base and the height are actually positive numbers
  if (base <= 0 || height <= 0) {
    throw new Error("base and height must be  a positive  value");
  }

  // formalae of a triangle 1/2 * base * height

  const area = 0.5 * base * height;

  return area;
};

try {
  console.log(calculateTriangleArea(10, 5));
  console.log(calculateTriangleArea(7, 4));
  console.log(calculateTriangleArea(0, 5));
} catch (error) {
  console.log(error.message);
}
