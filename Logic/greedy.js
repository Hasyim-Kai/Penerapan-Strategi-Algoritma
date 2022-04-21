let targetBudget = 7500;

let Rupiah = {
	seratusRibu : 100000,
	limaPuluhRibu : 50000,
	duaPuluhRibu : 20000,
	sepuluhPuluhRibu : 10000,
	limaRibu : 5000,
	duaRibu : 2000,
	seribu: 1000,
	limaRatus: 500
}

let currencyGreedyAlgorithm = (currency, amount) => {
	//ResultBill is all the bill types and amount of bills we are returning
	let resultBills = {};
	let cashLeftover = amount;

	//We are checking from the highest bill first to the lowest
	for (let key in currency) {
		//While amount leftover is greater than our current bill
		//we take and subtract it based on the bill's value
		while (cashLeftover >= currency[key]) {
			//Checking to see if the bill type already exist in our return hash.
			if (resultBills[key]) {   //If it does, we increment the bill by one.
				resultBills[key] += 1;
			} else {   //if it doesn't, we add the new key/value pair into the hash.
				resultBills[key] = 1;
			}
			//Then we subtract the value from the leftover cash.
			// cashLeftover = (cashLeftover - currency[key])
			cashLeftover -= currency[key]
		}
	}
	return resultBills;
}

console.table(currencyGreedyAlgorithm(Rupiah, targetBudget))
