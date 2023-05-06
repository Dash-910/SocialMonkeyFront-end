import "./online.css";

export default function Online({user}){
    return (
        <li className="rightbarfriend">
            <div className="rightbarProfileImgContainer">
                <img src={user.profileImg} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span  className="rightbarUsername">{user.username}</span>
        </li>
    )
}