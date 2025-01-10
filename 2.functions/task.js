function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		};
		if (arr[i] < min) {
			min = arr[i];
		};
		sum += arr[i];
	};
	return {
		min: min,
		max: max,
		avg: +(sum / arr.length).toFixed(2)
	};
};

function summElementsWorker(...arr) {
	if (!arr.length) {
		return 0;
	};

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	};
	return sum;
};

function differenceMaxMinWorker(...arr) {
	if (!arr.length) {
		return 0;
	};

	let min = Infinity;
	let max = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		};
		if (arr[i] < min) {
			min = arr[i];
		};
	};
	let dif = max - min;
	return dif;
};

function differenceEvenOddWorker(...arr) {
	if (!arr.length) {
		return 0;
	};

	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2) {
			sumOddElement += arr[i];
		} else {
			sumEvenElement += arr[i];
		}
	};
	let dif = sumEvenElement - sumOddElement;
	return dif;
};

function averageEvenElementsWorker(...arr) {
	if (!arr.length) {
		return 0;
	};

	sumEvenElement = 0;
	countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++
		}
	};
	let average = sumEvenElement / countEvenElement;
	return average;
};

function makeWork(arrOfArr, func) {
	maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	};
	return maxWorkerResult;
};