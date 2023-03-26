
import { useRef, useState ,useEffect} from "react"

import { post,postDeleted,postUpdated} from "../store/postSlice"
import { useAppDispatch } from "../store/hooks"

const PostsTable:React.FC<{posts : post[]}> = (props)=>{
 const dispatch= useAppDispatch()
 const [isEditMode,setEditMode]=useState<boolean>(false)

 const [name, setName] = useState('');
 const inputRef = useRef(null);
 const prevNameRef = useRef('');
 const [curId, setcurId] = useState(0);

 useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

 const EditView = (id:number)=>{
    setcurId(id);
    setEditMode(true)
 }

  const onpostUpdateHandler = (id:number,title:string)=>{
    dispatch(postUpdated({id:id, title:prevNameRef.current || title }))
    setEditMode(false)
 }
return(
    <div style={{display:"flex" ,flexDirection:"column", justifyContent:"center"}}>
        <table data-testid="table-binding">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>
                        TITLE
                    </td>
                </tr>
            </thead>
            <tbody>
                {props.posts.length>0 && props.posts.map(post=>{
                    return(
                         <tr key={post.id}>
                           <td> { post.id }  </td>
                           <div> {isEditMode && post.id == curId ?   <input
                                    ref={inputRef}
                                    value={ name || post.title}
                                    style={{width:"70%"}}
                                    onChange={(e)=> setName(e.target.value)}/> : post.title 
                            }  </div>
                            <td>
                            <button onClick={()=>(isEditMode && post.id == curId ?  onpostUpdateHandler(post.id,post.title): 
                            EditView(post.id) )}> {isEditMode && post.id == curId ? "Save" :"Edit" }</button>
                            </td>
                            <td></td>
                           <td>  <button onClick={()=>dispatch(postDeleted({id:post.id}))}>Delete</button> </td>
                         
                        </tr> 
                    )
                })
                }
            </tbody>
            </table>
    </div>
)
}

export default PostsTable