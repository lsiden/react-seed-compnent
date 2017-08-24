import Phrasebook from './i18n-phrasebook'

describe('i18n-phrasebook', () => {
	it('Default language is en', () => {
		const phrasebook = new Phrasebook()
		expect(phrasebook.language()).toBe('en')
	})

	it('Initialize with language', () => {
		const phrasebook = new Phrasebook({}, 'en')
		expect(phrasebook.language()).toBe('en')
	})

	it('Defaults to en if language is not supported', () => {
		const phrasebook = new Phrasebook({}, 'xxx')
		expect(phrasebook.language()).toBe('en')
	})

	it('Returns argument if phrase not found', () => {
		const phrasebook = new Phrasebook()
		expect(phrasebook.xlate('covfefe')).toBe('covfefe')
	})

	describe('Add Spanish phrases', () => {
		const locales = {
			sp: {
				'Hello': 'Hola',
				'Goodby': 'Adios'
			}
		}

		it('translates to English', () => {
			const phrasebook = new Phrasebook(locales, 'en')
			expect(phrasebook.xlate('Hello')).toBe('Hello')
		})

		it('translates to Spanish', () => {
			const phrasebook = new Phrasebook(locales, 'sp')
			expect(phrasebook.xlate('Hello')).toBe('Hola')
		})

		it('can change to another supported language', () => {
			const phrasebook = new Phrasebook(locales, 'en')
			expect(phrasebook.xlate('Hello')).toBe('Hello')
			phrasebook.language('sp')
			expect(phrasebook.language()).toBe('sp')
			expect(phrasebook.xlate('Hello')).toBe('Hola')
		})

		it('cannot change to an unsupported language', () => {
			const phrasebook = new Phrasebook(locales, 'sp')
			expect(phrasebook.xlate('Hello')).toBe('Hola')
			phrasebook.language('xxx')
			expect(phrasebook.language()).toBe('sp')
			expect(phrasebook.xlate('Hello')).toBe('Hola')
		})
	})
})