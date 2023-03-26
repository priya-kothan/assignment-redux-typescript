import { render, screen } from '@testing-library/react'
import  App  from './App'
import { rest } from 'msw'
import { server } from './mocks/server'
import { renderWithProviders } from './test-utils'

describe('App', () => {
  test('renders error', async () => {
    // server.use(
    //   rest.get(
    //     'https://jsonplaceholder.typicode.com/post',
    //     (req, res, ctx) => {
    //       return res(ctx.status(500))
    //     }
    //   )
    // )
    renderWithProviders(<App />)
    const pagetitle = await screen.findByText(/POST LIST/i)
    expect(pagetitle).toBeInTheDocument()
  })
})