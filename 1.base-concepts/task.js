"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b ** 2 - 4 * a * c;
	let d = discriminant;
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr = [-b / (2 * a)];
		return arr;
	} else {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
		return arr;
	}
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
	let n = countMonths;
	let monthlyPayment = s * (p + (p / (((1 + p) ** n) - 1)));
	let totalAmount = monthlyPayment * n;
	return +totalAmount.toFixed(2);
};