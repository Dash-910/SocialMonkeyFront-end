import { MoreVert } from "@mui/icons-material"
import "./post.css"

export default function post() {
  return (
   <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assests/person/cat.jpg" alt=""/>
                <span className="postUsername">Kitty the pretty</span>
                <span className="postDate">5 min ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">
                Its my frist post
            </span>
            <img src="assests/post/1.jpg" alt="" className="" />
        </div>
        <div className="postBottom">
            <div className="postBottomeLeft">
                <img src="assests/post/like.png" alt="" />
                <img src="assests/post/like.png" alt="" className="lineIcon" />
                <span className="postLikeCounter">32 people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
    </div>
   </div>
  )
}
