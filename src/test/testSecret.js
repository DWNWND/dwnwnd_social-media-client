require("dotenv/config");

function test(expectedSecret) {
  const secretMatches = process.env.EXAMPLE_SECRET == expectedSecret;
  console.log(`The example secret is ${process.env.EXAMPLE_SECRET}`);
  console.log(`The secret does${secretMatches ? "" : " not"} match!`);
  return secretMatches;
}

test("This is a secret");

const thisIsUnused = "yes";
