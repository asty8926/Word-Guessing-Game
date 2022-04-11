let words = Object.keys(wordsList) // an array of words

function randomGramCombination () {
	// returns a random bigram or trigram string
	let grams = [bigrams, trigrams]

	let gram = grams[range(0, grams.length - 1)]

	let combination = gram[range(0, gram.length - 1)]
	return combination
}

// Generate random Gram
let currentGram = randomGramCombination()
//console.log(currentGram)

// DOM query selectors
const gramEl = qs(".current-gram")
// const winLoseEl = qs(".win-lose-text")
const inputEl = qs(".text-input")

gramEl.innerText = currentGram


const alphabetContainer = qs(".alphabet-container")

function generateAlphabetElements() {
	alphabetLetters.forEach(letter => {
		let letterEl = document.createElement('div')
		letterEl.classList.add('letter-wrapper')
		letterEl.innerText = letter.toUpperCase()

		alphabetContainer.appendChild(letterEl)
	})
}

generateAlphabetElements()

function colorizeUsedLetter(currWord) {
	const lettersEl = qsa('.letter-wrapper')

	lettersEl.forEach(letterEl => {
		// let isSameLetter = letterEl.innerText == currLetterKey
		let letterElLetter = letterEl.innerText

		let isLetterInValidWord = currWord.includes(letterElLetter)

		if (isLetterInValidWord) {
			letterEl.classList.add('used-letter')
		}
	})
}

let globalScore = 0

function getWordScore(currWord) {
	let currWordArray = currWord.split("")
	// console.log(currWordArray)

	let score = 0

	currWordArray.forEach(_letter => {
		for (const [lettersScore, lettersArray] of Object.entries(letterValues)) {
			let isWordLetterInArray = lettersArray.includes(_letter.toLowerCase())
			// console.log(`currLetterInWord: ${_letter}\ncurrScoreKey: ${lettersScore}: ${lettersArray}\nisWordLetterInArray? ${isWordLetterInArray}`)

			if (isWordLetterInArray) {
				score += Number(lettersScore)
				// console.log(`Added ${lettersScore} points. Current word's score is now: ${score}`)
			}
		}
	})
	// console.log(`Current word's score was: ${score}`)
	globalScore += score
	return globalScore
}


let currentWord = "";

// will get filled in with each unique letters used
let usedLetters = []

let usedWords = []

function wonWord(currWord = currentWord.toUpperCase(), currGram = currentGram.toUpperCase()) {
	const isWordInGram = currWord.includes(currGram)
	const isWordValid = words.includes(currWord.toLowerCase())
	const isWordNotAlreadyUsed = !usedWords.includes(currWord)
	return isWordInGram && isWordValid && isWordNotAlreadyUsed
}

function handleUsedLetters(_currWord) {
	let wordAsArray = [..._currWord]

	// console.log("Used Letters before submitting: " + usedLetters)
	
	wordAsArray.forEach(wordLetter => {
		let isWordLetterNotInUsedLetters = !usedLetters.includes(wordLetter.toUpperCase());
		let isWordLetterInAlphabetLetters = alphabetLetters.includes(wordLetter.toLowerCase());

		if(isWordLetterNotInUsedLetters && isWordLetterInAlphabetLetters) {
			usedLetters.push(wordLetter.toUpperCase())
		}
	})
	
	// console.log("Used Letters after submitting: " + usedLetters)

	// Is true when the player used as many letters as there are
	if (usedLetters.length === alphabetLetters.length) {
		// console.log(usedLetters)
		console.log("You have used all letters, congrats!")
		// Gives N score when used all the letters
		rewardPlayerForUsingAllLetters()
		clearUsedLettersHighlight()
	}
}

function handleSubmission(currWord) {
	let isWon = wonWord()
	// winLoseEl.innerText = wonWord() ? "Valid" : "Invalid"

	// Resets the current gram if player just completed the current one
	if (wonWord()) {
		currentGram = randomGramCombination()
		gramEl.innerText = currentGram

		colorizeUsedLetter(currWord)

		let wordScore = getWordScore(currWord)
		globalScore = wordScore

		// console.log(wordScore)

		const scoreEl = qs('.score')
		scoreEl.innerText = wordScore

		usedWords.push(currWord.toUpperCase())

		handleUsedLetters(currWord)

		// // pushes the current unique letter to the used letter array
		// if (!usedLetters.includes(ukey)) {
		// usedLetters.push(ukey)
	}
}

let ctrlA = {
	'Control': false,
	'a': false
}

function isCtrlA () {
	return ctrlA['Control'] === true && ctrlA['a'] === true
}

let currentCtrlA = false



// Prevents the default behavior of the spacebar scrolling down the page
el('keydown', (e) => {
	if (e.key === ' ' && e.target === document.body) {
		e.preventDefault();
	}
}, window)

el('keydown', (e) => {
	let key = e.key
	let lkey = key.toLowerCase()
	let ukey = key.toUpperCase()

	if (key === 'Control') {
		ctrlA['Control'] = true
	}

	if (ctrlA['Control'] === true && lkey === 'a') {
		ctrlA['a'] = true
		// currentCtrlA = true
	}


	// console.log(key)
	// console.log(alphabet.includes(lkey))

	
	// Removes the last character inputted if backspace is pressed
	if (key === "Backspace") {
		if (isCtrlA()) {
			currentWord = ""
			inputEl.innerText = currentWord
		}

		currentWord = currentWord.slice(0, -1)
		inputEl.innerText = currentWord
	}

	// Resets "Control" to false if "a" is not pressed right after
	if (ctrlA['Control'] === true && lkey !== 'a') {
		ctrlA['Control'] = false
		ctrlA['a'] = false
		// currentCtrlA = false
	}


	// Clears the displayed word if Enter is pressed
	// Needs to be edited later to verify if the word passed matches the current gram and if the word exists
	if (key === "Enter") {

		handleSubmission(currentWord)

		currentWord = ""
		inputEl.innerText = ""
		return
	}

	// Breaks if the passed key is not a letter of the alphabet
	if (!alphabet.includes(lkey)) return

	// Prevents the displayed word and variable to be more than 45 characters-long
	if ((currentWord.length + 1) >= config.maxWordLength) return

	currentWord += ukey

	//generateColoredLettersInInput()

	inputEl.innerText = currentWord.toUpperCase()
})

// Need to generate separate/individual HTML elements for each word letter, and add colored classes to the gram letters
function generateColoredLettersInInput(currWord, currGram) {
	let isGramInWord = currWord.includes(currGram)

	// sm
	// mesmerizing


}

function displayUpScore() {
	const plusScoreEl = qs('.plus-score')
	
}

function rewardPlayerForUsingAllLetters() {
	globalScore += config.scoreToAddWhenAllLetters
}

function clearUsedLettersHighlight() {
	const lettersEl = qsa('.letter-wrapper')

	lettersEl.forEach(letterEl => {
			letterEl.classList.remove('used-letter')
	})
}


// let test = words.includes(input)

// let formattedString = test ? "is" : "is not"

// console.log(`The word "${input}" ${formattedString} in the list of English words.`)


const exeFadeBtn = qs('.exefade')

function executeFade(e) {
	const plusScoreEl = qs('.plus-score')
	plusScoreEl.classList.toggle('fade-up')
}

el('click', executeFade, exeFadeBtn)