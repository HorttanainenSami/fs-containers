// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Todo from './Todo'

test('renders todo text', () => {
  render(<Todo todo={{ text: 'Test todo', done: false }} deleteTodo={() => {}} completeTodo={() => {}} />)
  expect(screen.getByText('Test todo')).toBeDefined()
})