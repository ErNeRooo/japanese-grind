import formatTimeFromSeconds from "@/app/utils/formatTimeFromSeconds";

describe("for given seconds, properly formats time", () => {
  it.each([
    { input: -1000000, expected: "00:00:00" },
    { input: -1, expected: "00:00:00" },
    { input: 0, expected: "00:00:00" },
    { input: 1, expected: "00:00:01" },
    { input: 59, expected: "00:00:59" },
    { input: 60, expected: "00:01:00" },
    { input: 61, expected: "00:01:01" },
    { input: 120, expected: "00:02:00" },
    { input: 574, expected: "00:09:34" },
    { input: 3599, expected: "00:59:59" },
    { input: 3600, expected: "01:00:00" },
    { input: 36610, expected: "10:10:10" },
    { input: 86399, expected: "23:59:59" },
    { input: 86400, expected: "24:00:00" },
    { input: 86401, expected: "24:00:01" },
    { input: 86460, expected: "24:01:00" },
    { input: 90000, expected: "25:00:00" },
    { input: 360000, expected: "100:00:00" },
  ])("provided $input seconds, returns $expected", ({ input, expected }) => {
    const actual = formatTimeFromSeconds(input);

    expect(actual).toBe(expected);
  });
});
