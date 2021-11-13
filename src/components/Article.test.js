import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MutationObserver from 'mutationobserver-shim'

import Article from './Article'

const testArticle = {
  id: 'aMqwd', //unique article id
  headline: 'headline', //title of article
  createdOn: '2021-08-09T18:02:38-04:00', //timestamp of when article was added
  summary: 'summary', //short summary statement of article
  body: '', //paragraph of article text
}

test('renders component without errors', () => {
  render(<Article article={testArticle} />)
})

test('renders headline, author from the article when passed in through props', () => {
  render(<Article article={testArticle} />)

  const headline = screen.queryByTestId('headline')
  const author = screen.queryByTestId('author')
  const summary = screen.queryByTestId('summary')
  const body = screen.queryByTestId('body')

  expect(headline).toBeInTheDocument()
  expect(headline).toHaveTextContent(testArticle.headline)

  expect(author).toBeInTheDocument()

  expect(summary).toBeInTheDocument()
  expect(summary).toHaveTextContent(testArticle.summary)

  expect(body).toBeInTheDocument()
  expect(body).toHaveTextContent(testArticle.body)
})

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={testArticle} />)

  const author = screen.queryByTestId('author')

  expect(author).toHaveTextContent('Associated Press')
})

test('executes handleDelete when the delete button is pressed', () => {
  const mockHandleDelete = jest.fn()

  render(<Article article={testArticle} handleDelete={mockHandleDelete} />)

  const button = screen.getByTestId('deleteButton')
  userEvent.click(button)

  expect(mockHandleDelete).toHaveBeenCalled()
})
