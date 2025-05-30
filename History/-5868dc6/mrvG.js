console.log("hey");

const x = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};
const y = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};
const z = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};
const c = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accountsTest = [x, y, z, c];

const movementsTest = [1000, 200, 0, -150, 20, 3000, -1500, 0, 350];

const groupedMovements = Object.groupBy(movementsTest, (movement) =>
  movement > 0 ? "deposits" : "withdrawals"
);
console.log(groupedMovements); // Object { deposits: (5) […], withdrawals: (4) […] }

const groupedByActivity = Object.groupBy(accountsTest, (account) => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return "very active";
  if (movementCount >= 4) return "active";
  if (movementCount >= 1) return "moderate";
  return "inactive";
});
console.log(groupedByActivity); // Object { "very active": (3) […], active: (1) […] }

const groupedAccounts = Object.groupBy(accountsTest, (account) => account.type);
console.log(groupedAccounts); // Object { premium: (2) […], standard: (1) […], basic: (1) […] }

const test = [1, 2, 3, 4];
const newTest = test.with(1, 10);
console.log(newTest);
