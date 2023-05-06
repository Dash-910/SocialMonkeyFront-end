import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useState } from "react"
import {Users} from "../../dummyData"

export default function post(post) {
   const [like,setLike]= useState(post.lilke)
   const [isLiked,setIsLiked] = useState(false)
//    to check the no of like and change accordingly
   const likeHandler=()=>{
     setLike(isLiked ? like-1:like+1)
     setIsLiked(isLiked ? false:true)
   }
  return (
   <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u)=> u.id == post?.userId)[0].username} alt=""/>
                <span className="postUsername">
                    {Users.filter((u)=> u.id == post?.userId)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">
               {post?.desc}
            </span>
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomeLeft">
                <img src="assests/post/like.png" alt="" className="lineIcon" onClick={likeHandler}/>
                <img src="assests/post/like.png" alt="" className="lineIcon" onClick={likeHandler}/>
                <span className="postLikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
    </div>
   </div>
  )
}
