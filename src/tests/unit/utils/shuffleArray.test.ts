import shuffleArray from "@/app/utils/shuffleArray";

test("given array, returns shuffled array", () => {
  const sortedArray = ["A", "B", "C", "D", "F", "G"];

  const shuffledArray = shuffleArray(sortedArray);

  expect(shuffledArray).not.toEqual(sortedArray);
});
