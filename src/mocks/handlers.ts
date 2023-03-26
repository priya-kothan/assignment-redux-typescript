import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ])
    )
  }),
]