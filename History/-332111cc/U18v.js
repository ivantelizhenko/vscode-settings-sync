// Array Grouping

console.log(movements);

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "deposits" : "withdrawals"
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, (account) => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return "very active";
  if (movementCount >= 4) return "active";
  if (movementCount >= 1) return "moderate";
  return "inactive";
});
console.log(groupedByActivity);

const groupedAccounts = Object.groupBy(accounts, (account) => account.type);
console.log(groupedAccounts);
