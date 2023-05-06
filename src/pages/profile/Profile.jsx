import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

export default function Profile() {
  return (
    <div>
     <Topbar/>
    <div className="profile">
     <Sidebar/>
     <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
          <img src="assests/post/3.jpg" alt="" className="profileCoverImg" />
          <img src="assests/post/4.jpg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Dash 8220</h4>
            <span className="profileInfoDesc">This is the description</span>
          </div>
        </div>
        <div className="profileRightBottom">
     <Feed/>
     <Rightbar profile/>
        </div>
     </div>
    </div>   
    </div>
  )
}
