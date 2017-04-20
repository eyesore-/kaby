import { addTodo } from './index'

it('creates \'ADD_TODO\' action', () => {
  const id = Date.now()
  const action = {
    type: 'ADD_TODO',
    id: id,
    text: 'test TEst TEst'
  }
  const input = {
    text: 'test TEst TEst',
    id: id
  }
  expect(addTodo(input)).toEqual(action)
})
