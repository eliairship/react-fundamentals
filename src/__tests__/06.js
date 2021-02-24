import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import App from '../final/06'
import App from '../exercise/06'

beforeAll(() => {
  jest.spyOn(global, 'alert').mockImplementation(() => {})
})

beforeEach(() => {
  global.alert.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', () => {
  render(<App />)
  const input = screen.getByLabelText(/username/i)
  const submit = screen.getByText(/submit/i)

  const username = 'jenny'

  userEvent.type(input, username)
  userEvent.click(submit)

  expect(global.alert).toHaveBeenCalledWith(`You entered: ${username}`)
  expect(global.alert).toHaveBeenCalledTimes(1)
})

test('should render an error when uppercase letter is typed in usernameInput', () => {
  render(<App />)
  const input = screen.getByLabelText(/username/i)
  const errorMessage = screen.getByTestId('error-message')
  const username = 'Jenny'
  userEvent.type(input, username)

  // expect
  expect(errorMessage).toHaveTextContent('Username must be lowercase')
})
test('should disable the button when uppercase letter is typed in usernameInput', () => {
  render(<App />)
  const input = screen.getByLabelText(/username/i)
  const submit = screen.getByText(/submit/i)

  const username = 'Jenny'
  userEvent.type(input, username)

  // expect
  expect(submit).toBeDisabled()
})
