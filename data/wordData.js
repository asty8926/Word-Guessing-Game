// const all_words = require('./english_words_dictionary.json') // objects of keys

// import words from './english_words_dictionary.js'

// let wordsurl = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'

// async function getWords() {
// 	try {
// 		const res = await fetch(wordsurl)
// 		const data = await res.json()

// 		return Object.keys(data)
// 	} catch (error) {
// 		console.warn(error)
// 	}
// }


let bigrams = ["TH", "HE", "IN", "ER", "AN", "RE", "ES", "ST", "ON", "ND", "EN", "AT", "NT", "ED", "EA", "TO", "OR", "TI", "HA", "AR", "NG", "IS", "IT", "TE", "OU", "ET", "OF", "AL", "AS", "LE", "SE", "HI", "SA", "RA", "RO", "NE", "VE", "ME", "RI", "SO", "DE", "LL", "TA", "LI", "SI", "EL", "EC", "CO", "NO", "OT", "MA", "DI", "IC", "LA", "HO", "OM", "TT", "NA", "SH", "CH", "BE", "SS", "RT", "EE", "EM", "NS", "RS", "CE", "UR", "EI", "CA", "IO", "AC", "TS", "DA", "LO", "US", "WA", "NI", "DT", "PE", "FO", "EW", "UT", "WI", "IL", "EO", "LY", "WH", "AD", "UN", "OW", "TR", "NC", "FT", "DO", "GE", "EP", "MO", "WE"]

let trigrams = ["THE", "AND", "ING", "HER", "THA", "ENT", "ERE", "ION", "ETH", "NTH", "HAT", "INT", "FOR", "ALL", /*"STH",*/ "TER", "EST", "TIO", "HIS", "OFT", "HES", "ITH", "ERS", "ATI", "OTH", /*"FTH",*/ "DTH", "VER", /*"TTH",*/ "THI", "REA", "SAN", "WIT", "ATE", "ARE", "EAR", "RES", "ONT", "TIN", "ESS", "RTH", "WAS", "SOF", "EAN", "YOU", "SIN", "STO", "IST", /*"EDT",*/ "EOF", "EVE", "ONE", "AST", "ONS", "DIN", "OME", "CON", "ERA", "STA", "OUR", "NCE", "TED", "GHT", "HEM", "MAN", "HEN", "NOT", "ORE", "OUT", "ORT", "ESA", "ERT", "SHE", "ANT", "NGT", "EDI", "ERI", "EIN", /*"NDT",*/ "NTO", "ATT", "ECO", "AVE", "MEN", "HIN", "HEA", "IVE", "EDA", "INE", "RAN", "HEC", "TAN", "RIN", "ILL", "NDE", "THO", "HAN", "COM", "IGH", "AIN"]

let alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"]

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let letterValues = {
	1: ["a", "e", "i", "o", "u", "l", "n", "s", "t", "r"],
	2: ["d", "g"],
	3: ["b", "c", "m", "p"],
	4: ["f", "h", "v", "w", "y"],
	5: ["k"],
	8: ["j", "x"],
	10: ["q", "z"]
}