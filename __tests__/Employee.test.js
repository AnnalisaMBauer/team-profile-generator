const Employee = require("../lib/Employee");

// run test to check if employee works
test("can I set a name via the constructor", () => {
  const name = "john";
  const func = new Employee(name, 100);
  expect(func.id).toBe(100);
});
