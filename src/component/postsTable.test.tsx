import { render, screen ,fireEvent } from '@testing-library/react'
import  PostsTable  from './postsTable'
import { rest } from 'msw'
import { server } from '../mocks/server'
import { renderWithProviders } from '../test-utils'
import user from '@testing-library/user-event'
describe('postsTable', () => {

   const rawdata =  [
        {
          
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          
        },
        {
         
          "id": 2,
          "title": "qui est esse"
        
        },
        {
          
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut"
        }
    ]

  test('renders a table on edit initating', async() => {
      renderWithProviders(<PostsTable posts={rawdata}/>)
    const edit = screen.getByRole('table')
    expect(edit).toBeInTheDocument()
  })

  test('renders correctly', () => {
    renderWithProviders(<PostsTable posts={rawdata}/>)
      const textElement = screen.getByTestId('table-binding')
    screen.debug(textElement)
    expect(textElement).toBeInTheDocument()
  })


})