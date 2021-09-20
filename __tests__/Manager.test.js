const Manager = require("../lib/Manager");


test("does this return an number", ()=>{
    const id = new Manager("blah", 1,"test@test.com", 40)
    expect(id.officeNumber).toBe(40);
})