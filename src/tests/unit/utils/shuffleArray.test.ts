import shuffleArray from "@/app/utils/shuffleArray";

test("test", () => {
  const sortedArray = ["A", "B", "C", "D", "F", "G"];

  const shuffledArray = shuffleArray(sortedArray);

  expect(shuffledArray).toEqual(sortedArray);
});
