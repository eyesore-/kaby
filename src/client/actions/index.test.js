import { addTodo } from './index'

it('creates \'ADD_TODO\' action', () => {
  const id = Date.now()
  const action = {
    type: 'ADD_TODO',
    id,
    text: 'test TEst TEst'
  }
  const input = {
    text: 'test TEst TEst',
    id
  }
  expect(addTodo(input)).toEqual(action)
})
