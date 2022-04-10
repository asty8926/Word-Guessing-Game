// Adds an event listener to all new selectors
function addGlobalEventListener(
	type,
	selector,
	callback,
	options,
	parent = document
	) {
	parent.addEventListener(
		type,
		e => {
			if (e.target.matches(selector)) callback (e)
		},
		options
	)
}

function createElement(type, options = {}) {
	const element = document.createElement(type)
	Object.entries(options).forEach(([key, value]) => {
		if (key === "class") {
			element.classList.add(value)
			return
		}

		if (key === "dataset") {
			Object.entries(value.forEach(([dataKey, dataValue]) => {
				element.dataset[dataKey] = dataValue
			}))
			return
		}

		if (key === "text") {
			element.textContent = value
			return
		}

		element.setAttribute(key, value)
	})
	return element
}

// Add Event Listener Shortener
function el(eventName, callBack, target = document) {
	target.addEventListener(eventName, callBack);
}

// Query Selector
function qs(selector, parent = document) {
	return parent.querySelector(selector)
}

// Query Selector All
function qsa(selector, parent = document) {
	return [...parent.querySelectorAll(selector)]
}