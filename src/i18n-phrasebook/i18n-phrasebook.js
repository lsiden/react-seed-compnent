const debug = require('debug')('i18n-phrasebook')

export default class {
	constructor(lang='en', locale={}) {
		const languages = Object.getOwnPropertyNames(locale)
		this.lang = languages.indexOf(lang) === -1 ? 'en' : lang
		this.phrasebook = locale[this.lang] ? locale[this.lang] : {}
		debug('language set to %s', this.lang)
		debug('Phrase book has %d entries', Object.getOwnPropertyNames(this.phrasebook).length)
	}

	language() {
		return this.lang
	}

	xlate(key) {
		return this.phrasebook[key] || key
	}
}