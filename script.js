const makeChange = (c) => {
  // your name here  
	function makeChange(amount) {
  // Start with quarters
  let q = Math.floor(amount / 25);
  amount = amount % 25;

  // Then dimes
  let d = Math.floor(amount / 10);
  amount = amount % 10;

  // Then nickels
  let n = Math.floor(amount / 5);
  amount = amount % 5;

  // Remaining are pennies
  let p = amount;

  return { q, d, n, p };
}
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
