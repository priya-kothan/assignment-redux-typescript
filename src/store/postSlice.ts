import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

export interface post{
    id:number,
    title:string
}

interface postState{
    posts:post[]
}

const initialState:postState={
    posts :[]
}

export const fetchposts = createAsyncThunk('user/fetchUser', async () => {
    const response = await  fetch("http://jsonplaceholder.typicode.com/posts")
    const data= response.json()
    return data
  })

  
export const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
       
        postUpdated(state, action) {
            const { id, title } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.title = title;
            }
          },
          postDeleted(state, action) {
            const { id } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
              state.posts = state.posts.filter((post) => post.id !== id);
            }
          },

    },
   extraReducers(builder) {
       builder.addCase(fetchposts.fulfilled,(state,action)=>{
          
            state.posts = [...state.posts, ...action.payload];
       })
   },
})

export default postSlice.reducer;
 export const {postUpdated,postDeleted} = postSlice.actions;