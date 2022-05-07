const user = {
  name: "Bob",
  age: 22,
};

test("Bob is 22", () => {
  expect(user.age).toBe(22);
});
