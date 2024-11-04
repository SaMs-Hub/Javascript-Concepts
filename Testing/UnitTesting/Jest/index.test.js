const { sortByAge } = require('./index');

test("testing 1st index", () => {
    const data = sortByAge();
    expect(data[0].name).toBe("saddm")
})


test("testing length", () => {
    const data = sortByAge();
    expect(data.length).toBe(3)
})