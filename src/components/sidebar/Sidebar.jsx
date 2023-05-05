import "./sidebar.css"
import { ChatSharp, HelpOutline, RssFeed,Event, PlayCircleFilledOutlined, Groups, Bookmark,  } from "@mui/icons-material"
export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
            <ChatSharp className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
            <Groups className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Know More</span>
            </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        {/* hr addes a line  */}
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assests/person/elephant.jpg" alt=" "/>
                <span className="sidebarFriendName">Brian Dos</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assests/person/elephant.jpg" alt=" "/>
                <span className="sidebarFriendName">Brian Dos</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assests/person/elephant.jpg" alt=" "/>
                <span className="sidebarFriendName">Brian Dos</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assests/person/elephant.jpg" alt=" "/>
                <span className="sidebarFriendName">Brian Dos</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assests/person/elephant.jpg" alt=" "/>
                <span className="sidebarFriendName">Brian Dos</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assests/person/elephant.jpg" alt=" "/>
                <span className="sidebarFriendName">Brian Dos</span>
            </li>
        </ul>
       </div>
    </div>
  )
}
