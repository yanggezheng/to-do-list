
import * as app from'./app.mjs'
test('check if the check function returns the correct value 1', () => {expect(app.check([2,3,4], n=>6)).toBe(true)
})
test('check if the check function returns the correct value 2', () => {expect(app.check([2,3,7], n=>6)).toBe(false)
})
test('check if the check function returns the correct value 3', () => {expect(app.check([2,7,8], n=>6)).toBe(false)
})
test('check if the check function returns the correct value 4', () => {expect(app.check([-1,3,4], n=>6)).toBe(true)
})
test('check if the check function returns the correct value 5', () => {expect(app.check([2,3,0], n=>6)).toBe(true)
})

//https://www.youtube.com/watch?v=FgnxcUQ5vho