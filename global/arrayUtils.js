// Returns the first N elements of an array. 1 by default
function first(array, n = 1) {
	if (n === 1) return array[0]
	return array.filter((_, index) => index < n)
}

// Returns the last N elements of an array, 1 by default
function last(array, n = 1) {
	if (n === 1) return array[array.length - 1]
	return array.filter((_, index) => array.length - index <= n)
}

// Get random element of an array
function sample(array) {
	let min = 0
	let max = array.length - 1
	let rng = Math.floor(Math.random() * (max - min + 1)) + min
	return array[rng]
}

// Returns an array of all the values matching the key
// Example: pass an array of people's object with a "name" key
// It will return an array of just the names of the people of all objects in the array
function pluck(array, key) {
	return array.map(element => element[key])
}

// Returns an object with all the keys matching the key specified
// each key's value is the actual object that matched the key
// Example: pass an array of people's object with an "age" key
// Returns: { 18: [{ PERSON'S OBJECT }], 21: [{ PERSON'S OBJECT }] }
function groupBy(array, key) {
	return array.reduce((group, element) => {
		const keyValue = element[key]
		return { ...group, [keyValue]: [...(group[keyValue] ?? []),
			element] }
	}, {})
}