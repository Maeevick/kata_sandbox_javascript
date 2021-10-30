import { isOk } from './setup'

describe('SETUP ESLINT BABEL JEST', () => {
    test('setup is fine', () => {
        expect(isOk()).toBe(true)
    })
})
