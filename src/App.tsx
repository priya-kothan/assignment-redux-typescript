
import PostsTable from './component/postsTable'
import { useAppDispatch, useAppSelector } from './store/hooks';
import React from "react";
import {
  fetchposts
} from "./store/postSlice";

function App() {

const dispatch =useAppDispatch();
    React.useEffect(()=>{
      dispatch(fetchposts())
    },[]
)

const posts = useAppSelector(state=> state.post.posts)
  return (
   
    <div>
      <div style={{display:"flex" , justifyContent:"center"}}> POST LIST </div>
       <PostsTable posts={posts}/>
    </div>
  );
}

export default App;
