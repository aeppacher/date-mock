import { mockDates } from "../../src";
import { getNextInterval } from "..";

describe("getNextInterval test", () => {
  it("should return a duration of 20 seconds and a next interval of 2021-01-01:00:00:40.000Z", () => {
    mockDates([
      "2021-01-01:00:00:00.000Z", // start time
      "2021-01-01:00:00:10.000Z", // timeOfNextInterval
      "real", //nextInterval - we want it to build date off params passed to it
      "2021-01-01:00:00:20.000Z", // endTime
    ]);

    const resp = getNextInterval(30);
    expect(resp).toEqual({
      duration: 20000,
      nextInterval: "2021-01-01T00:00:40.000Z",
    });
  });
});
