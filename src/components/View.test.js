import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import View from './View'

const testArticles = [0, 1, 2].map((id) => ({
  id: id, //unique article id
  headline: 'headline', //title of article
  createdOn: '2021-08-09T18:02:38-04:00', //timestamp of when article was added
  summary: 'summary', //short summary statement of article
  body: '', //paragraph of article text
}))

test('renders zero articles without errors', async () => {
  render(<View />)
})

// test('renders three articles without errors', async () => {})
