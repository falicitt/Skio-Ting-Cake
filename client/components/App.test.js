import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchCakes } from '../actions'

jest.mock('../actions')

fetchCakes.mockImplementation(() => () => {})

test('page header includes cakes', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/Fruit/)
})

test('renders an <li> for each cakes', () => {
  const fruits = ['orange', 'persimmons', 'kiwi fruit']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ fruits }))

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(3)
})

test('dispatches fetchCakes action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchCakes).toHaveBeenCalled()
})
