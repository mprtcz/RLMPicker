const { searchData } = require("./searchData");

describe("unit tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("finds all proper objects - 1 filter", () => {
    const data = [
      { titles: ["title1", "title2"], members: ["Jess", "Jay"] },
      { titles: ["title3", "title4"], members: ["Mike", "Jay"] },
      { titles: ["title5", "title6"], members: ["Mike", "Jess"] },
    ];
    const filters = [{ type: "titles", items: ["title1"] }];
    const result = searchData(data, filters);

    expect(result).toEqual([
      { titles: ["title1", "title2"], members: ["Jess", "Jay"] },
    ]);
  });

  test("finds all proper objects - 2 filters", () => {
    const data = [
      { titles: ["title1", "title2"], members: ["Jess", "Jay"] },
      { titles: ["title3", "title4"], members: ["Mike", "Jay"] },
      { titles: ["title5", "title6"], members: ["Mike", "Jess"] },
    ];
    const filters = [{ type: "members", items: ["Mike", "Jess"] }];
    const result = searchData(data, filters);

    expect(result).toEqual([
      { titles: ["title5", "title6"], members: ["Mike", "Jess"] },
    ]);
  });

  test("finds all proper objects - complex filters", () => {
    const data = [
      { titles: ["title1", "title2"], members: ["Jess", "Jay"] },
      { titles: ["title3", "title4"], members: ["Mike", "Jay"] },
      { titles: ["title5", "title6"], members: ["Mike", "Jess"] },
      { titles: ["title7", "title8"], members: ["Mike", "Jess"] },
    ];
    const filters = [
      { type: "members", items: ["Mike", "Jess"] },
      { type: "titles", items: ["title7"] },
    ];
    const result = searchData(data, filters);

    expect(result).toEqual([
      { titles: ["title7", "title8"], members: ["Mike", "Jess"] },
    ]);
  });
});
