import * as pbt from 'fast-check'
import { isOk, rollDiceWith6Sides } from './setup'

describe('SETUP UNIT TESTING WITH JEST', () => {
    test('setup is fine', () => {
        expect(isOk()).toBe(true)
    })
})

describe('SETUP PROPERTY-BASED TESTING WITH FAST-CHECK AND JEST', () => {
    test('rollDiceWith6Sides returns an interger between 1 and 6 included', () => {
        expect(rollDiceWith6Sides()).toBeDefined()

        pbt.assert(
            pbt.property(
                pbt.anything(),
                () => {
                    const diceResult = rollDiceWith6Sides()
                    return diceResult >= 1 && diceResult <= 6
                },
            ),
        )
    })
})
