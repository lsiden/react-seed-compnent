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

	it('Attempt to change to unsupported language results in no change', () => {
		const phrasebook = new Phrasebook({}, 'en')
		phrasebook.language('he')
		expect(phrasebook.language()).toBe('en')
	})

	it('Returns argument if phrase not found', () => {
		const phrasebook = new Phrasebook()
		expect(phrasebook.xlate('covfefe')).toBe('covfefe')
	})

	describe('Add Spanish phrases', () => {
		const locale = {
			sp: {
				'Hello': 'Hola',
				'Goodby': 'Adios'
			}
		}

		it('translates to English', () => {
			const phrasebook = new Phrasebook(locale, 'en')
			expect(phrasebook.xlate('Hello')).toBe('Hello')
		})

		it('translates to Spanish', () => {
			const phrasebook = new Phrasebook(locale, 'sp')
			expect(phrasebook.xlate('Hello')).toBe('Hola')
		})

		it('can change to another supported language', () => {
			const phrasebook = new Phrasebook(locale, 'en')
			expect(phrasebook.xlate('Hello')).toBe('Hello')
			phrasebook.language('sp')
			expect(phrasebook.language()).toBe('sp')
			expect(phrasebook.xlate('Hello')).toBe('Hola')
		})
	})
})