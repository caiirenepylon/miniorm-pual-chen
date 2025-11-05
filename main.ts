// TODO: implement query builder here

class ORM {}


//////////// TESTING CODE BELOW ///////////////////////
const o = new ORM();

console.log("Running tests...");

// Note: Uncomment the tests as you get them to pass, the later tests won't pass the typechecker
//       until they're implemented.
const TEST_CASES = [
  () => ({
    query: o.table("users"),
    expected: "SELECT * FROM users;"
  }),
  // () => ({
  //   query: o.table("users").select("id", "email"),
  //   expected: "SELECT id, email FROM users;",
  // }),
  // () => ({
  //   query: o.table("products").select("id", "upc", "volume").where(
  //     o.cond("volume", ">", 300),
  //     o.cond("upc", "=", "1337"),
  //   ),
  //   expected: "SELECT id, upc, volume FROM products WHERE volume > 300 AND upc = '1337';",
  // }),
  // () => ({
  //   query: o.table("products").select("product_id", "price").alias("p"),
  //   expected: "SELECT p.product_id, p.price FROM products p;",
  // }),
  // () => {
  //   const users = o.table("users").select("user_id", "email").alias("u");
  //   const loanApps = o.table("applications").select("loan_id").alias("app");
  //   return {
  //     query: users.join(loanApps, {using: "user_id"}),
  //     expected: "SELECT u.user_id, u.email, app.loan_id FROM users u JOIN applications app USING user_id;"
  //   }
  // },
  // () => {
  //    const users = o.table("users").select("user_id", "email").alias("u").where(o.cond("user_id", "=", "user_123"))
  //    const orders = o.table("orders").select("order_id", "total").alias("o").where(o.cond("total", ">", 1000))
  //    return {
  //      query: users.join(orders, {using: "user_id"}),
  //      expected: "SELECT user_id, u.email, o.order_id, o.total FROM users u JOIN orders o USING user_id WHERE user_id = 'user_123' AND o.total > 1000;",
  //    };
  // },
];

// Nicer assertion
const stringAssert = (testNum: number, obj: any, expected: string) => {
  if (expected !== obj.render()) {
    console.log("Strings did not match!");
    console.log(`EXPECTED: ${expected}`);
    console.log(`OBTAINED: ${obj.render()}`);
    console.log("Object:", obj);
    throw new Error(`Test #${testNum} failed`);
  }
}


TEST_CASES.forEach((testCase, index) => {
  const { query, expected } = testCase();
  stringAssert(index, query, expected);
  console.log(`Test #${index + 1} passed.`);
});

console.log("All tests passed :)")
