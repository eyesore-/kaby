import { extractCategory, extractText } from './helpers'

it('Extract category from task input', () => {
  let input = '+category some shit to do'
  let correct = 'category'
  let extracted = extractCategory(input)
  expect(extracted).toBe(correct)
})

it('Return null when no category is provided', () => {
  let input = 'some other shit to do'
  let extracted = extractCategory(input)
  expect(extracted).toBeNull()
})

it('Extract text from input with category', () => {
  let input = '+category some shit to do'
  let correct = 'some shit to do'
  let extracted = extractText(input)
  expect(extracted).toBe(correct)
})

it('Extract text from input with no category', () => {
  let input = 'some other shit to do'
  let extracted = extractText(input)
  expect(extracted).toBe(input)
})
