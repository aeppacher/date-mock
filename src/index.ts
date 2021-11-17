// Reference to set date back to normal
const RealDate = Date;

export function mockDateOnce(isoDate: string) {
  const mockDate = class extends RealDate {
    constructor() {
      super();
      const date = new RealDate(isoDate);

      // Reset date to original implementation
      global.Date = RealDate;
      return date;
    }
  } as DateConstructor;

  mockDate.now = () => new RealDate(isoDate).getTime();

  global.Date = mockDate;
}

export function mockDate(isoDate: string) {
  const mockDate = class extends RealDate {
    constructor() {
      super();
      return new RealDate(isoDate);
    }
  } as DateConstructor;

  mockDate.now = () => new RealDate(isoDate).getTime();

  global.Date = mockDate;
}

export function mockDates(isoDates: string[]) {
  let callTimes = 0;
  const mockDate = class extends RealDate {
    constructor(param?: string) {
      if (callTimes < isoDates.length) {
        super();
        if (isoDates[callTimes] === "real") {
          callTimes++;
          return param ? new RealDate(param) : new RealDate();
        }
        return new RealDate(isoDates[callTimes++]);
      }
      throw new Error("Called mockDates, but accessed more dates than mocked");
    }
  } as DateConstructor;

  mockDate.now = () => new RealDate(isoDates[callTimes++]).getTime();

  global.Date = mockDate;
}
