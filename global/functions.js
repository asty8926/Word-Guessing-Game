// Generate an integer in range X to Y, both included
function range(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Executes code after the specified duration in ms
function sleep(duration) {
	return new Promise(resolve => {
		setTimeout(resolve, duration)
	})

	/* USAGE EXAMPLE
	- Execute the thenable code after 200 ms:

	sleep(200).then(() => {
		// some code here
 }) */
}

// returns the result of a function you already executed with the given parameters
// to optimize memory, cache, and power usage
function memoize(callBack) {
	const cache = new Map()
	return (...args) => {
		const key = JSON.stringify(args)
		if (cache.has(key)) return cache.get(key)

		const result = callBack(...args)
		cache.set(key, result)
		return result
	}
}
