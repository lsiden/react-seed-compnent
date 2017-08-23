const debug = require('debug')('i18n-phrasebook')

export default class {
	constructor(phrasebooks={}, lang='en') {
		this.phrasebooks = phrasebooks
		this.lang = phrasebooks[lang] ? lang : 'en'
		this.phrasebook = phrasebooks[this.lang] ? phrasebooks[this.lang] : {}
		debug('Provided languages are: %s', Object.getOwnPropertyNames(phrasebooks).join(', '))
		debug('language set to %s', this.lang)
		debug('Phrase-book has %d entries for  %s', Object.getOwnPropertyNames(this.phrasebook).length, this.lang)
	}

	language(lang=null) {
		if (lang && this.phrasebooks[lang]) {
			this.lang = lang
			this.phrasebook = this.phrasebooks[lang]
		}
		return this.lang
	}

	xlate(key) {
		return this.phrasebook[key] || key
	}
}