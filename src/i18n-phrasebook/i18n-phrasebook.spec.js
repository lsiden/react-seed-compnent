import Phrasebook from './i18n-phrasebook'

describe('i18n-phrasebook', () => {
	it('Default language is en', () => {
		const phrasebook = new Phrasebook()
		expect(phrasebook.language()).toBe('en')
	})

	it('Set language', () => {
		const phrasebook = new Phrasebook('en')
		expect(phrasebook.language()).toBe('en')
	})

	it('Defaults to en if language is not supported', () => {
		const phrasebook = new Phrasebook('xxx')
		expect(phrasebook.language()).toBe('en')
	})

	it('Returns argument if phrase not found', () => {
		const phrasebook = new Phrasebook()
		expect(phrasebook.xlate('covfefe')).toBe('covfefe')
	})

	describe('Add some phrases', () => {
		const locale = {
			en: {
				'Hello': 'Hello',
				'Goodby': 'Goodby',
			},
			sp: {
				'Hello': 'Hola',
				'Goodby': 'Adios'
			}
		}

		it('translates to English', () => {
			const phrasebook = new Phrasebook('en', locale)
			expect(phrasebook.xlate('Hello')).toBe('Hello')
		})

		it('translates to Spanish', () => {
			const phrasebook = new Phrasebook('sp', locale)
			expect(phrasebook.xlate('Hello')).toBe('Hola')
		})
	})
})